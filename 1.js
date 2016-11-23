 $(function(){
 	$('.slide1 .btn.btn-default').click(function() {
 		$('body').animate({scrollTop:$('.slide4').offset().top}, 1000)
 		return false;
 	});

 	$('.menuright').css({'height':$(window).height()});
 	  
	$('.slide1').css({'height':$(window).height()});

	$(window).resize(function(){
	 		  
	 	$('.slide1').css({'height':$(window).height()});
	 	$('.menuright').css({'height':$(window).height()});
	
	});

		$('.menuright.rightlist.about').click(function() {
 		$('body').animate({scrollTop:$('.slide4').offset().top}, 1000)
 		$('.menuright').removeClass('show');
 		return false;
 	});
 	
 	$('.menubtn').click(function(){
	 	$('.menuright').addClass('show');
	 	return false; 
	 })
 	$('.off').click(function(){
	 	$('.menuright').removeClass('show');
	 	return false; 
	 })
 	 	$('.b2').click(function(){
 	 	$('body').animate({scrollTop:$('.slide2').offset().top});
 	 	$('.menuright').removeClass('show');
 	 	return false;
 	 })

	$('.b1').click(function(){
 	 	$('body').animate({scrollTop:0});
 	 	$('.menuright').removeClass('show');
 	 	return false;
 	 })
$('.b3').click(function(){
 	 	$('body').animate({scrollTop:$('.slide5').offset().top});
 	 	$('.menuright').removeClass('show');
 	 	return false;
 	 })


$('.b4').click(function(){
 	 	$('body').animate({scrollTop:$('.slide7').offset().top});
 	 	$('.menuright').removeClass('show');
 	 	return false;
 	 })


})  
	 
     