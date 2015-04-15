$(document).ready(function(){
	$('input').first().not(':radio,:checkbox,:button,:disabled,:file,:image,:reset,:submit').focus();

	$('#account-form').validate();

});