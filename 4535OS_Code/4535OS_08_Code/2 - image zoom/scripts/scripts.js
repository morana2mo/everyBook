$(document).ready(function(){
	$('figure').each(function(){
		var $this = $(this);
		var filePath = $this.find('img').data('lgsrc');
		$this.zoom({
			url: filePath
		})
	});
});


