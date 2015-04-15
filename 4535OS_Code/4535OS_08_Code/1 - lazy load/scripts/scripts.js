$(document).ready(function(){
	$('body').removeClass('jsOff');
	$('img').unveil(200, function(){
		$(this).hide().fadeIn();
	});
});