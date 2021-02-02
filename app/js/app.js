document.addEventListener("DOMContentLoaded", function() {

	// Jquery Functions
	$(window).on("load", function () {
		$(".preloader").delay(700).fadeOut("slow");
	});

	$('.readmore').on('click', function(e) {
		if($(this).prev().hasClass('active')) {
			$(this).prev().removeClass('active')
		} else {
			$(this).prev().addClass('active')
		}
		e.preventDefault()
	})

	// Magnific Popup
	function popupGallery(selector) {
		$(selector).magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image',
			tClose: 'Закрыть',
			tLoading: 'Загрузка...',
			gallery: {
				enabled: true, // set to true to enable gallery
				navigateByImgClick: true,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow-gallery mfp-arrow-gallery-%dir%"></button>', // markup of an arrow button
				tPrev: 'Назад', // title for left button
				tNext: 'Вперед', // title for right button
			}
		});
	}
	
	// End Magnific Popup

	// Silders with scrollbar

	function initScrollBar(sliderSelector, scrollBarSelector) {
		const $slider = $(sliderSelector);
		const $progressBar = $(scrollBarSelector);
		const $progressBarLabel = $( '.slider__label' );
		
		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
			let calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

			$progressBar
				.css('background-size', calc + '% 100%')
				.attr('aria-valuenow', calc );
			
			$progressBarLabel.text( calc + '% completed' );
		});
	}

	const $certificateSlider = $('.certificates-gallery');
  
  $certificateSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
		speed: 400,
		prevArrow: ".slider__prev",
		nextArrow: ".slider__next",
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});


	// Partners Slider
	const $partnersSlider = $('.partners-slider');
	
	$partnersSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
		speed: 400,
		prevArrow: ".partners-slider__prev",
		nextArrow: ".partners-slider__next",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});
	
	// Projects Slider
	$('.projects-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.projects-thumbs',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					//autoplay: true,
  				//autoplaySpeed: 3000,
				}
			}
		]
	});
	$('.projects-thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: ".projects-thumbs__prev",
		nextArrow: ".projects-thumbs__next",
		asNavFor: '.projects-slider',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	//End Silders with scrollbar

	// News Slider
	const $newsSlider = $('.news-slider');
	
	$newsSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
		speed: 400,
		prevArrow: ".news-slider__prev",
		nextArrow: ".news-slider__next",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});



	// Pure JS Function
	const phoneMask = IMask(
		document.querySelector('.phone'), {
			mask: '+{7}(000)000-00-00'
		});

	function dropdownHover() {
		$hasChildLink = document.querySelectorAll('.navbar__item-child')
		$hasChildLink.forEach(el => {
			el.addEventListener('mouseover', function() {
				this.childNodes[0].nextElementSibling.style.color = '#ffa25c'
				this.childNodes[0].nextElementSibling.children[0].style.transform = 'rotate(180deg)'
				this.childNodes[0].nextElementSibling.children[0].style.fill = '#ffa25c'
			})
		});
		$hasChildLink.forEach(el => {
			el.addEventListener('mouseout', function() {
				this.childNodes[0].nextElementSibling.style.color = '#ffffff'
				this.childNodes[0].nextElementSibling.children[0].style.transform = 'rotate(0)'
				this.childNodes[0].nextElementSibling.children[0].style.fill = '#ffffff'
			})
		});
	}

	if(document.querySelectorAll('.navbar__item-child .navbar__link')) {
		document.querySelectorAll('.navbar__item-child .navbar__link').forEach(link => {
			link.addEventListener('click', function(e) {
				e.preventDefault()
				return false
			})
		})
	}

	function hamburgerMenu() {
		const $burgerBtn = document.querySelector('.hamburger')
		const $mobileMenu = document.querySelector('.header__bottom')
		$burgerBtn.addEventListener('click', function() {
			if(this.classList.contains('hamburger__active')){
				this.classList.remove('hamburger__active')
				$mobileMenu.classList.remove('active')
				document.body.style.overflow = ''
			} else {
				this.classList.add('hamburger__active')
				$mobileMenu.classList.add('active')
				document.body.style.overflow = 'hidden'
			}
		})
	}

	function showPhones() {
		const $phoneIcon = document.querySelector('.phone-list__icon')
		const $phonesList = document.querySelector('.phone-list')
		$phoneIcon.addEventListener('click', function() {
			$phonesList.classList.toggle('active')
		})
	}

	function basicAnimation() {
		const tl = gsap.timeline({
			delay: 0.7
		})
		tl.from('.home .logotype', { opacity: 0, duration: 1 })
		tl.from('.home .phone-list', { opacity: 0, y: 20, duration: 0.5}, '-=0.8')
		tl.from('.home .location', { opacity: 0, y: 20, duration: 0.5}, '-=0.8')
		tl.from('.home .navbar', { opacity: 0, y: 20, duration: 0.5}, '-=0.7')
		tl.from('.home .main__text .post-title', { opacity: 0, y: -20, duration: 1}, '-=0.7')
		tl.from('.home .main__text p.description', { opacity: 0, y: 20, duration: 1}, '-=0.7')
		tl.from('.home .main__text .section-title', { opacity: 0, duration: 0.7}, '-=0.8')
		tl.from('.home .main .form', { opacity: 0, duration: 2}, '-=0.8')
		tl.from('.home .main .main__btn', { opacity: 0, duration: 1}, '-=1.5')
	}

	if(window.innerWidth < 576) {
		$('.projects-slider').slick('unslick');
	}

	dropdownHover()
	hamburgerMenu()
	showPhones()
	basicAnimation()
	initScrollBar('.certificates-gallery', '.certificates-gallery__progress')
	initScrollBar('.partners-slider', '.partners-slider__progress')
	initScrollBar('.projects-thumbs', '.projects-thumbs__progress')
	initScrollBar('.news-slider', '.news-slider__progress')
	popupGallery('.certificates-gallery')

});
