$(document).ready(function(){
  $('a[rel="gallery"]').colorbox({
    iframe: true,
    width: '90%',
    height: '90%',
    current: 'Website {current} of {total}'
  });
});