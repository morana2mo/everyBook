$(document).ready(function(){
	$('select').transformSelect();
	$(':file').transformFile();
	$(':checkbox').transformCheckbox({
		base: 'class',
		trigger: 'parent'
	});
$(':radio').transformRadio({
	base: 'class',
	trigger: 'parent'
});
});