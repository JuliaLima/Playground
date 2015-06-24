var classforHiddingFirst = 'non-displayed';
var openBubbles = {
	push: function(name){
		this.popAll();
		this[name] = true;
		var bubbleElem = $('[bubble="' + name + '"]');
		showElement(bubbleElem, 'animated fadeIn', 'animated fadeOut');
	},
	pop: function(name){
		delete this[name];
		var bubbleElem = $('[bubble="' + name + '"]');
		hideElement(bubbleElem, 'animated fadeIn', 'animated fadeOut');
	},
	popAll: function() {
		for(var index in this){
			if(this.hasOwnProperty(index) && index !== 'push' && index !== 'pop' && index !== 'popAll' && index !== 'isOpened' && index !== 'toggle'){
				this.pop(index);
			}
		}
	},
	toggle: function(name) {
		if(this.isOpened(name)){
			this.pop(name);
		} else {
			this.push(name);
		}
	},
	isOpened: function(name){
		return this.hasOwnProperty(name);
	}
};

var showElement = function(elem, animatedShowClassIn, animatedShowClassOut) {
	elem.removeClass(classforHiddingFirst);
	elem.removeClass(animatedShowClassOut);
	elem.addClass(animatedShowClassIn);
};

var hideElement = function(elem, animatedShowClassIn, animatedShowClassOut) {
	elem.removeClass(animatedShowClassIn);
	elem.addClass(animatedShowClassOut);
	$(elem).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
		$(this).addClass(classforHiddingFirst);
	});
};

var isShown = function(elem, animatedShowClassOut) {
	return elem.hasClass(classforHiddingFirst) || elem.hasClass(animatedShowClassOut);
};

var setUiEvents = function() {
	var bubblesTriggers = $('[bubble-trigger]');
	var bubblesTriggersClickBehaviour = function() {
		var bubbleName = $(this).attr('bubble-trigger');
		openBubbles.toggle(bubbleName);
	};
	bubblesTriggers.click(bubblesTriggersClickBehaviour);
	
	/*var main = $('main, aside nav');
	var clickOnBody = function() {
		openBubbles.popAll();
	};
	main.click(clickOnBody);*/
	
	var optionsMenu = $('[options-menu] ul li');
	var optionsMenuClickBehaviour = function() {
		var li = $(this);
		var dropdownMenu = li.children(".dropdown-menu");
		if(dropdownMenu.hasClass('non-displayed')) {
			dropdownMenu.removeClass('non-displayed');
			dropdownMenu.removeClass('animated flipOutX');
			dropdownMenu.addClass('animated flipInX');
			li.addClass('active');
		} else {
			dropdownMenu.removeClass('animated flipInX');
			dropdownMenu.addClass('animated flipOutX');
			$(dropdownMenu).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				dropdownMenu.addClass('non-displayed');
				li.removeClass('active');
				$(this).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
			});
		}
	};
	optionsMenu.click(optionsMenuClickBehaviour);
	
	$('[flip-trigger]').click(function() {
		var frontElem = $('[twoFacedElement=' + $(this).attr('flip-trigger') + '] [face="isOnTheFront"]');
		var backElem = $('[twoFacedElement=' + $(this).attr('flip-trigger') + '] [face]').filter(function() {
			return this.attributes.face.value.match(/isOnTheBack:*/);
		});
		frontElem.attr('face', 'isOnTheBack:' + (backElem.attr('face').split(':')[1] === '+' ? '-' : '+'));
		frontElem.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
			function(event) {
				$(this).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				$(this).css('display', 'none');
				backElem.css('display', '');
				setTimeout(function() {
					backElem.attr('face', 'isOnTheFront');
				}, 0);
			});
	});
	$('[face="isOnTheBack:-"]').css('display', 'none');
};

var body = $('body');
body.ready(setUiEvents);