var hideClass = 'nonDisplayedAll';

var hideElement=function(elem){
	elem.addClass(hideClass);
}

var showElement=function(elem){
	elem.removeClass(hideClass);
}

/*var toggle=function(elem){
	if(){
	
	}
}*/

var setUiEvents = function() {
	var actions=$('[data-hamburgerIcon]');
	var actionsClickBehaviour=function(){
		var modal=$('[data-mainModal]');
		var modalDisplayValue = modal.css('display');
		if(modalDisplayValue == 'none'){
			showElement(modal);
			$(modal).addClass('animated fadeIn');
		} else {
			$(modal).removeClass('animated fadeIn');
			hideElement(modal);
		}
	}
	actions.click(actionsClickBehaviour);
	
	var cog=$('[data-cog]');
	var cogClickBehaviour=function(){
		var modal=$('[data-notif-modal]');
		var modalDisplayValue = modal.css('display');
		if(modalDisplayValue == 'none'){
			showElement(modal);
			$(modal).addClass('animated fadeIn');
		} else {
			$(modal).removeClass('animated fadeIn');
			hideElement(modal);
		}
	}
	cog.click(cogClickBehaviour);
	
	
	var search=$('[data-search]');
	var searchClickBehaviour=function(){
		var modal=$('[data-search-modal]');
		var modalDisplayValue=modal.css('display');
		if(modalDisplayValue == 'none'){
			showElement(modal);
			$(modal).addClass('animated fadeIn');
		} else {
			$(modal).removeClass('animated fadeIn');
			hideElement(modal);
		}
	}
	search.click(searchClickBehaviour);
	
	var userButton=$('[data-userButton]');
	var userButtonClickBehaviour=function(){
		var modal=$('[data-user-modal]');
		var modalDisplayValue=modal.css('display');
		if(modalDisplayValue == 'none'){
			showElement(modal);
			$(modal).addClass('animated fadeIn');
		} else {
			$(modal).removeClass('animated fadeIn');
			hideElement(modal);
		}
	}
	userButton.click(userButtonClickBehaviour);
	
	var user=$('[data-user]');
	var userClickBehaviour=function(){
		var modal=$('[data-user-modal]');
		var modalDisplayValue=modal.css('display');
		if(modalDisplayValue == 'none'){
			showElement(modal);
			$(modal).addClass('animated fadeIn');
		} else {
			$(modal).removeClass('animated fadeIn');
			hideElement(modal);			
		}
	}
	user.click(userClickBehaviour);
	
	var notif=$('[data-notif]');
	var notifClickBehaviour=function(){
		var modal=$('[data-notif-modal]');
		var modalDisplayValue=modal.css('display');
		if(modalDisplayValue == 'none'){
			showElement(modal);
			$(modal).addClass('animated fadeIn');
		} else {
			$(modal).removeClass('animated fadeIn');
			hideElement(modal);			
		}
	}
	notif.click(notifClickBehaviour);

	
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
