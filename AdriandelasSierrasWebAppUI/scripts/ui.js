var setUiEvents = function() {
	var bell=$('#bell');

	var bellClickBehaviour=function(){
		var main=$('#main-buttons');
		var mainDisplayValue = main.css('display');
		var aside=$('#mainNotifications');
		if(mainDisplayValue == 'flex'){
			main.removeClass('displayed');
			main.addClass('non-displayed');
			aside.removeClass('non-displayed');
			aside.addClass('displayed');
		} else {
			main.removeClass('non-displayed');
			main.addClass('displayed');
			aside.removeClass('displayed');
			aside.addClass('non-displayed');
		}
	}
	
	bell.click(bellClickBehaviour);	
};

var body=$('body');
body.ready(setUiEvents);
