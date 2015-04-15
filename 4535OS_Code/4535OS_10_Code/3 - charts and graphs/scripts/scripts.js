$(document).ready(function(){
	var preferredWidth = 450,
		contentWidth = $('.content p:first').width() - 83,
		finalWidth = (preferredWidth > contentWidth) ? contentWidth : preferredWidth;
		finalHeight = finalWidth/2 + 'px';
		finalWidth += 'px';


$('#menu').visualize({
	width: finalWidth,
	height: finalHeight,
	colors: ['#e75845','#967dd9','#8dc059','#42b0d8'],
	barMargin: 20
});

$('#eaten').addClass('accessHide').visualize({
	type: 'pie',
	width: finalWidth,
	height: finalHeight,
	colors: ['#e75845','#967dd9','#8dc059','#42b0d8'],
	pieMargin: 10
}).appendTo('#pie-container').trigger('visualizeRefresh');

});

