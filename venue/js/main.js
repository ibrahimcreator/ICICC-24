(function ($) {

	"use strict";

	$(window).on('load', function () {
		// Material
		$.material.init();

		$('.search-icon').on('click', function () {
			$('.navbar-form').fadeIn(300);
			$('.navbar-form input').focus();
		});
		$('.navbar-form input').blur(function () {
			$('.navbar-form').fadeOut(300);
		});

		// Carousel
		$('.carousel').carousel()

		// Preloader
		$('#preloader').delay(500).fadeOut(1000);

		// sticky menu 
		$(window).on('scroll', function (event) {
			var scroll = $(window).scrollTop();
			if (scroll < 20) {
				$(".navbar-area").removeClass("sticky");
			} else {
				$(".navbar-area").addClass("sticky");
			}
		});

		$('.navbar-nav .nav-item a').on('click', function () {
			$(this).siblings().toggleClass('show');
		});

		$('.navbar-nav .nav-item a span').on('click', function () {
			$(this).toggleClass('show');
		});


		//  VIDEO POP-UP
		$('.video-popup').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});

		//WOW Scroll Spy
		var wow = new WOW({
			//disabled for mobile
			mobile: false
		});
		wow.init();
		// Testimonial Carousel
		var owl = $(".testimonials-carousel");
		owl.owlCarousel({
			dots: true,
			nav: false,
			slideSpeed: 1000,
			stopOnHover: true,
			autoPlay: true,
			items: 1
		});

		// Full Carousel
		var owl = $("#carousel-full");
		owl.owlCarousel({
			dots: true,
			nav: false,
			slideSpeed: 1000,
			stopOnHover: true,
			autoPlay: true,
			items: 1
		});

		// Client Owl Carousel
		$("#client-logo").owlCarousel({
			dots: false,
			nav: false,
			slideSpeed: 1000,
			stopOnHover: true,
			autoPlay: true,
			items: 5,
			responsive: {
				0: {
					items: 1
				},
				525: {
					items: 2
				},
				718: {
					items: 3
				},
				972: {
					items: 4
				},
				1000: {
					items: 5
				}
			}
		});

		// Flickr Carousel
		$("#flickr-carousel").owlCarousel({
			dots: false,
			nav: false,
			slideSpeed: 300,
			paginationSpeed: 400,
			items: 1,
			autoPlay: 3000,
			stopOnHover: true,
		});

		// Image Carousel
		$("#Material-image-carousel").owlCarousel({
			dots: true,
			nav: true,
			slideSpeed: 300,
			paginationSpeed: 400,
			items: 5,
			autoPlay: 3000,
			stopOnHover: true,
			responsive: {
				0: {
					items: 1
				},
				525: {
					items: 2
				},
				718: {
					items: 3
				},
				972: {
					items: 4
				},
				1000: {
					items: 5
				}
			}
		});

		$('#Material-image-carousel').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
		$('#Material-image-carousel').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');

		// Image Carousel
		$("#team-carousel").owlCarousel({
			slideSpeed: 300,
			paginationSpeed: 400,
			items: 5,
			autoPlay: 3000,
			margin: 15,
			dots: false,
			stopOnHover: true,
			responsive: {
				0: {
					items: 1
				},
				525: {
					items: 2
				},
				718: {
					items: 3
				},
				972: {
					items: 4
				},
				1000: {
					items: 5
				}
			}
		});

		// Counter JS
		$('.work-counter-section').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({
						Counter: 0
					}).animate({
						Counter: $this.text()
					}, {
						duration: 3000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).off('inview');
			}
		});

		// MixitUp Init
		$('#Material-portfolio').mixItUp();

		$('#myTab a').on('click', function (e) {
			e.preventDefault()
			$(this).tab('show')
		})

		// Back Top Link
		var offset = 200;
		var duration = 500;
		$(window).scroll(function () {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(400);
			} else {
				$('.back-to-top').fadeOut(400);
			}
		});

		$('.back-to-top').click(function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});

}(jQuery));
