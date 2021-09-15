// !(function($) {
// 	"use strict";

// // PreLoader
// setTimeout(function(){
// 	$('.loader-wrap').fadeToggle();
//   }, 3000);

// // Sticky Navbar
// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("mynavbar");
// function myFunction() {
//   if (window.pageYOffset >= 60) {
// 	navbar.classList.add("sticky")
//   } else {
// 	navbar.classList.remove("sticky");
//   }
// }
  //VenoBox 
//  
$(document).ready(function(){
	$('.venobox').venobox(); 
});
// //counter
// // $('[.counter"]').counterUp({
// // 	delay: 10,
// // 	time: 1000
// //   }); 
// $('.counter-count').each(function () {
// 	$(this).prop('Counter',0).animate({
// 		Counter: $(this).text()
// 	}, {
	  
// 	  //chnage count up speed here
// 		duration: 4000,
// 		easing: 'swing',
// 		step: function (now) {
// 			$(this).text(Math.ceil(now));
// 		}
// 	});
// });

// //   Owl Carousel

// //   
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:2
//         }
//     }
// })

// })(jQuery);
//setTimeout(function(){
// 	$('.loader-wrap').fadeToggle();
//   }, 3000);
$('#welcome-carousel').owlCarousel({
	    loop:true,
	    margin:0,
		padding:0,
	    nav:false,
		dots:false,
		autoplay:true,
		smartSpeed: 3000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	$('#testimonials-carousel').owlCarousel({
	    loop:true,
	    margin:50,
	    nav:false,
		dots:true,
		autoplay:false,
		smartSpeed: 500,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:2
	        }
	    }
	})
	$('#our-clients-carousel').owlCarousel({
	    loop:true,
	    margin:5,
	    nav:false,
		dots:false,
		autoplay:true,
		smartSpeed: 1500,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})
	$('#designs-carousel').owlCarousel({
	    loop:true,
	    margin:20,
		autoplay:false,
	    nav:true,
		dots:false,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        800:{
	            items:3
	        },
			1000:{
	            items:4
	        },
			1200:{
				items:5
			}
	    }
	})


	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 4000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	$(document).ready(function(){
		$('.btn-filter').click(function(){
		  const value = $(this).attr('data-filter');
		  if (value == 'all'){
			$('.projects-item').show('1000');
		  }
		  else {
			$('.projects-item').not('.'+value).hide('1000');
			$('.projects-item').filter('.'+value).show('1000');
		  }
		})
	  //add active class on selected item
	  $('.btn-filter').click(function(){
		$(this).addClass('btn-active').siblings().removeClass('btn-active');    
		})
	  })
	  $('.counter-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
		  
		  //chnage count up speed here
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


	window.onscroll=function(){
		myfunction()
	};
	var navbar = document.getElementById("mynavbar");
	function myfunction(){
		if(window.pageYOffset>=100){
			navbar.classList.add("sticky")
		}
		else{
			navbar.classList.remove("sticky");
		}
	}
	/*===========================
====== Porfolio Filter ======
=============================*/
$(document).ready(function () {
    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');
      if (value == "all") {
        $('.filter').show('1000');
      }
      else {
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');
      }
  // active
      $(".filter-button").removeClass('active');
      var $this = $(this);
      if (!$this.hasClass('active')) {
        $this.addClass('active');
      }
    });
  });
	
