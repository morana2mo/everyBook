$(document).ready(function(){
  var form = $('#login-form');
  form.hide();
  form.before('<a href="#login-form" id="login-link">Login</a>');
  $('#login-link').colorbox({
    width: '400px',
    inline: true,
    content: $(this).attr('href'),
    scrolling: false,
    onOpen: function() { form.show(); },
    onComplete: function() { $.colorbox.resize(); },
    onCleanup: function() { form.hide(); }
  });
});