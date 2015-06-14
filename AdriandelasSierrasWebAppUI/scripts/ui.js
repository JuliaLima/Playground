var animationClassIn = 'animated fadeIn';
var animationClassOut = 'animated fadeOut';
var classforHiddingFirst = 'non-displayed-for-fading';

var showElement=function(elem){
	elem.removeClass(classforHiddingFirst);
	elem.removeClass(animationClassOut);
	elem.addClass(animationClassIn);
};

var hideElement=function(elem){
	elem.removeClass(animationClassIn);
	elem.addClass(animationClassOut);
};

var isShown=function(elem){
	return elem.hasClass(classforHiddingFirst) || elem.hasClass(animationClassOut);
};

var setUiEvents = function() {
	var bubbles = $('[bubble-toggle]');
	var bubblesClickBehaviour = function() {
		var bubbleModalName = $(this).attr('bubble-toggle');
		var bubbleModal = $('['+bubbleModalName+']');
		if(isShown(bubbleModal)){
			showElement(bubbleModal);
		} else {
			hideElement(bubbleModal);
		}
	};
	bubbles.click(bubblesClickBehaviour);
	
	var icon=$('[data-notificationsEmail]');
	var iconClickBehaviour=function(){
		var buttons=$('[data-iconButtonMessage]');
		var buttonsDisplayValue = buttons.css('display');
		if(buttonsDisplayValue == 'none'){
			$(buttons).removeClass('nonDisplayedAll');
		} else {
			$(buttons).addClass('nonDisplayedAll');
		}
	}
	icon.click(iconClickBehaviour);
	
	
	var icon=$('[data-notificationsBus]');
	var iconClickBehaviour=function(){
		var buttons=$('[data-iconButtonTicket]');
		var buttonsDisplayValue = buttons.css('display');
		if(buttonsDisplayValue == 'none'){
			$(buttons).removeClass('nonDisplayedAll');
		} else {
			$(buttons).addClass('nonDisplayedAll');
		}
	}
	icon.click(iconClickBehaviour);
};

var body=$('body');
body.ready(setUiEvents);
