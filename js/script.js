
$(document).ready(function(){

	/*----------  Init OWL Corousel  ----------*/

	$('.owl-carousel').owlCarousel({
		items: 5,
	    loop:true,
	    margin:100,
	    nav:true,
	    navText:['<img src="img/prev.png" alt="Prev">','<img src="img/next.png" alt="Next">'],
	   	responsive:{
	        0:{
	            items:3
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});


	/*---------- Init Easing   ----------*/
	
	$('nav a, .down-btn a').bind('click', function(){

		$('html, body').stop().animate({

			'scrollTop': $($(this).attr('href')).offset().top - 80
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
	

	/*----------  Init Bootstrap Scrollspy  ----------*/
	
	$('body').scrollspy({

		target: '.navbar'
	});




});

