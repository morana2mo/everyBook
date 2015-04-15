$(document).ready(function(){
  $('#sfNav').superfish({
    animation: {
      height: 'show'
    }
  });

  $('nav').meanmenu({
    meanMenuClose: '\xD7',
    meanContract: '\u2013',
    meanScreenWidth: '880'
  });
});