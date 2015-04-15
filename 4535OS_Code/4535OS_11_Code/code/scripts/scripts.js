$(document).ready(function() {
	/* CSS classes for JS state */
	$('html').removeClass('jsOff').addClass('jsOn');

	/* Vars that we'll need */
	var win = $(window),
		winHeight = win.height(),
		winWidth = win.width();

	/* Set each block to window height */
	$('.scrollblock').css('height', winHeight);

/* Scrollorama setup */
var weather = $.scrollorama({
	blocks:'.scrollblock'
});

/* Parallax cloud animation */
weather
	.animate('#cloud-layer-back', {
		duration:	winHeight * 2,
		property:	'top',
		start:		winHeight * .1,
		end:			-winHeight * .1
	})
	.animate('#cloud-layer-mid', {
		duration: winHeight * 2,
		property: 'top',
		start: winHeight * .25,
		end: -winHeight * .25
	})
	.animate('#cloud-layer-front', {
		duration: winHeight * 2,
		property: 'top',
		start: winHeight * .5,
		end: -winHeight * .5
	});


/* Animate wind */
weather
	.animate('#wind', {
		duration: winHeight * 1.7,
		property: 'left',
		start: winWidth * .8,
		end: winWidth * .3
	});

/* Set up a dot nav */
var dotnav = $('<ul id="dotnav"></ul>');
$('body').append(dotnav);
$('.scrollblock').each(function(){
	var id = this.id;
	dotnav.append('<li><a href="#' + id + '"></a></li>');
});
var navHeight = dotnav.height();
dotnav.css('top', (winHeight/2 - navHeight/2));

dotnav.find('a').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top + 1
	}, 1000);
}).first().addClass('active');

/* Update dotnav while scrolling */
weather.onBlockChange(function() {
	var i = weather.blockIndex;
	dotnav.find('a').removeClass('active').eq(i).addClass('active');
});

});