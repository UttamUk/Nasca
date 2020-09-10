$(document).ready(function () {
	$('#home').owlCarousel({
		loop: true,
		// margin: 10,
		nav: true,
		// rewind: true,
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		autoplay: true,
		autoplaySpeed: 300,
		// autoPlay: 2000,
		autoplayTimeout: 20000,
		// center:true,
		responsive: {

			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
});

