$(document).ready(function(){
  $('#video-link').colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390
  });
  
  $('a[rel="favorites"]').colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390,
    current: 'Video {current} of {total}'
  });
});