$(document).ready(function(){
	slides = $('#crossfade');

	slides.find('li').hide().filter(':first').show();
	setInterval(slideshow, 3000);
});

var slides;

function slideshow() {
	slides.find('li:first').fadeOut('slow').next().fadeIn('slow').end().appendTo(slides);
}