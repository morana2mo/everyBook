$(document).ready(function(){
	$.vegas('slideshow', {
		delay: 5000,
		backgrounds: [
			{ src: 'images/seychelles.jpg', fade: 2000 },
			{ src: 'images/seychelles2.jpg', fade: 2000 },
			{ src: 'images/seychelles3.jpg', fade: 2000 }
		]
	})('overlay', {
		src: 'overlays/03.png'
	});
});

