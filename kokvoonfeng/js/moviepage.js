$('.menu').on('click', function(){
  	$('.sidebar').sidebar('setting', 'transition', 'overlay','toggle')
  	.sidebar('toggle');

  });