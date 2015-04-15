$(document).ready(function(){
	$('body').removeClass('jsOff').addClass('jsOn');

$('#carousel .cycle-slide').on('click', function(e){
	e.preventDefault();
	var index = $('#carousel .cycle-slideshow').data('cycle.API').getSlideIndex(this);
	$('.cycle-slideshow').cycle('goto', index);
});

});