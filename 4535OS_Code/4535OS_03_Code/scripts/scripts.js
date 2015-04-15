$(document).ready(function(){
	$('body').removeClass('jsOff').addClass('jsOn');
	dynamicFAQ();
});

function dynamicFAQ() {
	$('dd').hide();
	$('dt').on('click', function(){
		$(this).toggleClass('open').next().slideToggle();
	});
}
