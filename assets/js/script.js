$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
})
$(document).ready(function () {
	$('.navbar-nav li a.collapse-close').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});

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




var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

// window.onload = function () {
$(document).ready( () => {
	// debugger
	var elements = document.getElementsByClassName('typewrite');
	var elements1 = document.getElementsByClassName('typewrite1');
	var elements2 = document.getElementsByClassName('typewrite2');
	var elements3 = document.getElementsByClassName('typewrite3');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	for (var i = 0; i < elements1.length; i++) {
		var toRotate = elements1[i].getAttribute('data-type');
		var period = elements1[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements1[i], JSON.parse(toRotate), period);
		}
	}
	for (var i = 0; i < elements2.length; i++) {
		var toRotate = elements2[i].getAttribute('data-type');
		var period = elements2[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements2[i], JSON.parse(toRotate), period);
		}
	}
	for (var i = 0; i < elements3.length; i++) {
		var toRotate = elements3[i].getAttribute('data-type');
		var period = elements3[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements3[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
})

// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// anime.timeline({ loop: true }).add({
//     targets: '.ml2 .letter',
//     scale: [4, 1],
//     opacity: [0, 1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70 * i
// }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });

// $(document).ready(function () {
//     $('#menuIcon').click(function () {
//         $('#mainMenu').css('right', '0px');
//         function showMenu() {
//             $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0% 50%);');
//             $('#menuIcon').animate({ right: '0' }, 300);
//         }
//         setTimeout(showMenu, 100);
//     });

//     $('#close').click(function () {
//         $('#mainMenu').css('-webkit-clip-path', 'polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);');
//         function closeMenu() {
//             $('#mainMenu').css('right', '-200px');
//             $('#menuIcon').animate({ right: '0' }, 300);
//         }
//         setTimeout(closeMenu, 100);

//         function originalLayout() {
//             $('#mainMenu').css('-webkit-clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0% 50%);');
//         }
//         setTimeout(originalLayout, 600);
//     });
// });

// $(document).ready((function () {
//     $('.sidenav-btn').click(function () {
//         $('.sidenav').toggleClass('active-btn');
//         $('.main-body').toggleClass('active-body');

//     });
// }));


// var container = $('.table-height1'),
//     scrollTo = $('#center-tr');

// container.animate({
//     // scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
//     scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - (container.height()/2)
// });




window.sr = ScrollReveal();

// sr.reveal('.home-title', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '110px',
// 	opacity: 0.3,
// 	delay: 0,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// 	// rotate: { x: 0, y: 10, z: 0 },
// });

// sr.reveal('.home-subtitle', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '100px',
// 	delay: 100,
// 	opacity: 0,
// });

// sr.reveal('.home-btn', {
// 	duration: 2000,
// 	origin: 'bottom',
// 	distance: '100px',
// 	delay: 200,
// 	opacity: 0,
// });


sr.reveal('.choose-title', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


sr.reveal('.choose-content', {
	duration: 1900,
	origin: 'bottom',
	distance: '40px',
	viewFactor: 0.01,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


// sr.reveal('.service-subtitle', {
// 	duration: 2500,
// 	origin: 'right',
// 	distance: '210px',
// 	viewFactor: 0.3,
//     delay: 0,
//     opacity: 0.7,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// });
