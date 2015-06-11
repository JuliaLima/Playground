var setUiEvents = function() {
	var bell=$('#bell');

	var bellClickBehaviour=function(){
		var main=$('#main-buttons');
		var mainDisplayValue = main.css('display');
		var aside=$('#mainNotifications');
		if(mainDisplayValue == 'flex'){
			main.addClass('non-displayed');
			aside.removeClass('non-displayed');
		} else {
			aside.addClass('non-displayed');
			main.removeClass('non-displayed');
		}
	}
	
	bell.click(bellClickBehaviour);	
};

var body=$('body');
body.ready(setUiEvents);
