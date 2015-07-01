var modal = (function(){
	var opened;
	var modalTypes = {}
	
	return {
		addType: function(tName, typeObj) {
			modalTypes[tName] = typeObj;
		},
		toggle: function(elem, type) {
			var isSame = this.closePrev(elem);
			if(!isSame) {
				modalTypes[type].open(elem);
				opened = {
					type: type,
					elem: elem
				};
			}
		},
		closePrev: function(actual) {
			isSame = false;
			if(typeof opened === 'object') {
				modalTypes[opened.type].close(opened.elem);
				isSame = ((typeof actual === 'object') ? (actual[0] === opened.elem[0]) : false);
			}
			opened = undefined;
			
			return isSame;;
		}
	}
})();

modal.addType('bubble', {
	open: function(elem) {
		elem.removeClass('non-displayed');
		elem.removeClass('animated fadeOut');
		elem.addClass('animated fadeIn');
	},
	close: function(elem){
		elem.removeClass('animated fadeIn');
		elem.addClass('animated fadeOut');
		$(elem).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
			$(this).addClass('non-displayed');
		});
	}
});

modal.addType('options-menu', {
	open: function(elem) {
		var dropdownMenu = elem.children(".dropdown-menu");
		dropdownMenu.removeClass('non-displayed');
		dropdownMenu.removeClass('animated flipOutX');
		dropdownMenu.addClass('animated flipInX');
		elem.addClass('active');
	},
	close: function(elem){
		var dropdownMenu = elem.children(".dropdown-menu");
		dropdownMenu.removeClass('animated flipInX');
		dropdownMenu.addClass('animated flipOutX');
		elem.removeClass('active');
		$(dropdownMenu).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			dropdownMenu.addClass('non-displayed');
			//elem.removeClass('active');
			$(this).off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
		});
	}
});

var setUiEvents = function() {
	var bubblesTriggers = $('[bubble-trigger]');
	var bubblesTriggersClickBehaviour = function(e) {
		e.stopPropagation();
		var bubbleName = $(this).attr('bubble-trigger');
		var bubbleElem = $('[bubble="' + bubbleName + '"]');
		modal.toggle(bubbleElem, 'bubble');
	};
	bubblesTriggers.click(bubblesTriggersClickBehaviour);
	
	var body = $('body');
	var clickOnBody = function() {
		modal.closePrev();
	};
	body.click(clickOnBody);
	
	var optionsMenu = $('[options-menu] ul li');
	var optionsMenuClickBehaviour = function(e) {
		e.stopPropagation();
		var li = $(this);
		modal.toggle(li, 'options-menu');
	};
	optionsMenu.click(optionsMenuClickBehaviour);
	
	$('[flip-trigger]').click(function() {
		var frontElem = $('[twoFacedElement=' + $(this).attr('flip-trigger') + '] [face="isOnTheFront"]');
		var backElem = $('[twoFacedElement=' + $(this).attr('flip-trigger') + '] [face]').filter(function() {
			return this.attributes.face.value.match(/isOnTheBack:*/);
		});
		/*frontElem.css('height', '100px');
		frontElem.css('overflow', 'hidden');
		backElem.css('height', '100px');
		backElem.css('overflow', 'hidden');*/
		frontElem.attr('face', 'isOnTheBack:' + (backElem.attr('face').split(':')[1] === '+' ? '-' : '+'));
		frontElem.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
			function(event) {
				$(this).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				$(this).css('display', 'none');
				/*$(this).css('height', '');
				$(this).css('overflow', '');*/
				backElem.css('display', '');
				/*backElem.css('height', '');
				backElem.css('overflow', '');*/
				setTimeout(function() {
					backElem.attr('face', 'isOnTheFront');
				}, 0);
			});
	});
	$('[face="isOnTheBack:-"]').css('display', 'none');
};

var body = $('body');
body.ready(setUiEvents);