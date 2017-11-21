$('.reset').on('click',function(){
	location.reload();
})

$('.seat').on('click',function(){
	if (!$(this).hasClass('active')){
		$(this).addClass('active');
	}
	else if ($(this).hasClass('active')){
		$(this).removeClass('active');
	}
})

$('.menu').on('click', function(){
  	$('.sidebar').sidebar('setting', 'transition', 'overlay','toggle')
  	.sidebar('toggle');
});


$('.book').on('click',function(){
	if ($('.seat').hasClass('active')){
		$('.active').addClass('active02');
		alert('YOU BOOKED SIT'+" "+ $('.booked').text()+"BUY DONE~THANK YOU");
	}
	else{
	alert('Please select you seat')
	}
})