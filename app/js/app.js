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

	$(".scroll-to").on("click", function(e) {
		$('body,html').animate({scrollTop: 770}, 350)
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

	$('.form-popup').magnificPopup({
		type:'inline',
		tClose: 'Закрыть',
		tLoading: 'Загрузка...',
		showCloseBtn: false,
		removalDelay: 300,
		mainClass: 'mfp-fade',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	$('.form__button').on("click", function() {
		$.magnificPopup.close();
	});
	
	// End Magnific Popup

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.toTop').addClass('active')
		} else {
			$('.toTop').removeClass('active')
		}
	})

	$('.toTop').on('click', function() {
		$('html, body').stop().animate({ scrollTop: 0}, 'slow', 'swing')
	})

	// Silders with scrollbar

	function setProgress(index, $slider, $progressBar, $progressBarLabel) {
		const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
	
		$progressBar
			.css('background-size', `${calc}% 100%`)
			.attr('aria-valuenow', calc);
	
		$progressBarLabel.text(`${calc.toFixed(2)}% completed`);
	}

	function initScrollBar(sliderSelector, scrollBarSelector) {
		
		const $slider = $(sliderSelector);
		const $progressBar = $(scrollBarSelector);
		const $progressBarLabel = $( '.slider__label' );

		setProgress(0, $slider, $progressBar, $progressBarLabel)
		
		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
			setProgress(nextSlide, $slider, $progressBar, $progressBarLabel);
		});
	}

	//setProgress(0);

	const $certificateSlider = $('.certificates-gallery');
  
  $certificateSlider.slick({
    slidesToShow: 4,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
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
    slidesToShow: 5,
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

	// Inner Catalog Slider
	$('.inner-catalog-preview').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.inner-catalog-slider-nav',
		adaptiveHeight: true,
	});
	$('.inner-catalog-slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.inner-catalog-preview',
		focusOnSelect: true,
		infinite: false,
		rtl: true,
		arrows: false
	});
 

	// Sales Slider
	const $employeesSlider = $('.sales-slider');
	
	$employeesSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
		speed: 400,
		prevArrow: ".sales-slider__prev",
		nextArrow: ".sales-slider__next",
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
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// Supply Slider
	const $supplySlider = $('.supply-slider');
	
	$supplySlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
		speed: 400,
		arrows: true,
		prevArrow: ".supply-slider__prev",
		nextArrow: ".supply-slider__next",
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
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// Logistics Slider
	const $logisticsSlider = $('.logistics-slider');
	
	$logisticsSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
		speed: 400,
		arrows: true,
		prevArrow: ".logistics-slider__prev",
		nextArrow: ".logistics-slider__next",
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
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});




	// Pure JS Function
	function phoneMask() {
		const $phoneMask = document.querySelectorAll('.phone')
		if ($phoneMask) {
			$phoneMask.forEach(phone => {
				IMask(
					phone, {
						mask: '+{7}(000)000-00-00'
				});
			})
		}
	}

	function goBack() {
		$backBtn = document.querySelector('.back-btn')
		if($backBtn) {
			$backBtn.addEventListener('click', function() {
				window.history.back();
			})
		}
	}
	


	if(document.querySelectorAll('.navbar__item-child .navbar__link')) {
		document.querySelectorAll('.navbar__item-child .navbar__link').forEach(link => {
			link.addEventListener('click', function(e) {
				e.preventDefault()
				return false
			})
		})
	}

	function accordion() {
		const $acc = document.querySelectorAll('.accordion__header')
		$acc.forEach(item => {
			item.addEventListener('click', function () {
				const $currentlyActuveAccHeader = document.querySelector('.accordion__header.accordion__header-active')
				if ($currentlyActuveAccHeader && $currentlyActuveAccHeader !== item) {
					$currentlyActuveAccHeader.classList.toggle('accordion__header-active')
					$currentlyActuveAccHeader.nextElementSibling.style.maxHeight = 0
				}

				this.classList.toggle('accordion__header-active')
				const $accBody = this.nextElementSibling
				if (this.classList.contains('accordion__header-active')) {
					$accBody.style.maxHeight = $accBody.scrollHeight + 'px'
				} else {
					$accBody.style.maxHeight = 0
				}
			})
		})
	}


	function dropdownMenu () {
		const $dropdownItem = document.querySelectorAll('.navbar__item-child')
		$dropdownItem.forEach(item => {
			item.addEventListener('click', function (e) {
				if(this.classList.contains('active')) {
					this.classList.remove('active')
				} else {
					$dropdownItem.forEach(link => {
						link.classList.remove('active')
					})
					this.classList.add('active')
				}
				//e.preventDefault()
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

	gsap.registerPlugin(ScrollTrigger);
	gsap.config({ nullTargetWarn: false })
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

	function aboutSectionAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.home .about'
			}
		})
		scrollAnim.from('.home .about .post-title', { y: 100, opacity: 0, duration: 0.5 })
		scrollAnim.from('.home .about .section-title', { x: -100, opacity: 0, duration: 1 }, '-=0.4')
		scrollAnim.from('.home .about .advantages', { opacity: 0, duration: 1, stagger: 0.4 }, '-=0.4')
	}

	function catalogSectionAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.home .catalog'
			}
		})
		scrollAnim.from('.home .catalog .post-title', { y: 100, opacity: 0, duration: 0.5 })
		scrollAnim.from('.home .catalog .section-title', { x: -100, opacity: 0, duration: 1}, '-=0.4')
		scrollAnim.from('.home .catalog .catalog-dots', { opacity: 0, duration: 2})
		scrollAnim.from('.home .catalog .catalog__btn', { opacity: 0, duration: 0.5}, '-=0.4')
	}

	function certificatesSectionAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.home .certificates'
			}
		})
		scrollAnim.from('.home .certificates .post-title', { y: 100, opacity: 0, duration: 0.5 })
		scrollAnim.from('.home .certificates .section-title', { x: -100, opacity: 0, duration: 1}, '-=0.4')
		scrollAnim.from('.home .certificates .certificates-gallery', { opacity: 0, y: 100, duration: 1}, '-=0.7')
	}

	function partnersSectionAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.home .partners'
			}
		})
		scrollAnim.from('.home .partners .post-title', { y: 100, opacity: 0, duration: 0.5 })
		scrollAnim.from('.home .partners .section-title', { x: -100, opacity: 0, duration: 1}, '-=0.4')
		scrollAnim.from('.home .partners .partners-slider', { opacity: 0, y: 100, duration: 1}, '-=0.7')
	}

	function projectsSectionAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.home .projects'
			}
		})
		scrollAnim.from('.home .projects .post-title', { y: 100, opacity: 0, duration: 0.5 })
		scrollAnim.from('.home .projects .projects-slider__title', { x: -100, opacity: 0, duration: 1}, '-=0.4')
		scrollAnim.from('.home .projects .projects-slider__img', { opacity: 0, x: 100, duration: 1}, '-=0.7')
		scrollAnim.from('.home .projects .projects-slider__text', { opacity: 0, x: -100, duration: 1}, '-=0.7')
		scrollAnim.from('.home .projects .projects-thumbs', { opacity: 0, y: 100, duration: 1}, '-=0.4')
	}
	function newsSectionAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.home .news'
			}
		})
		scrollAnim.from('.home .news .post-title', { y: 100, opacity: 0, duration: 0.5 })
		scrollAnim.from('.home .news .section-title', { x: -100, opacity: 0, duration: 1}, '-=0.4')
		scrollAnim.from('.home .news .news-slider', { opacity: 0, y: 100, duration: 1}, '-=0.4')
	}
	function contactsSectionAnimation() {
		const scrollAnim = gsap.timeline({
			scrollTrigger: {
				trigger: '.home .contacts'
			}
		})
		scrollAnim.from('.home .contacts .post-title', { y: 100, opacity: 0, duration: 0.5 })
		scrollAnim.from('.home .contacts .section-title', { x: -100, opacity: 0, duration: 1}, '-=0.4')
		scrollAnim.from('.home .contacts .contacts__item', { opacity: 0, x: -100, duration: 1, stagger: 0.5}, '-=0.4')
		scrollAnim.from('.home .contacts .form', { opacity: 0, x: 100, duration: 1}, '-=0.7')
	}


	function fixedHeader() {
		const $mainSection = document.querySelector('section.main')

		if ($mainSection) {
			const $mainSectionHeight = document.querySelector('section.main').offsetHeight
			let $header = document.querySelector('.header')
			let lastScrollTop = 0;
			window.addEventListener("scroll", function(){
				var st = window.pageYOffset || document.documentElement.scrollTop; 
				if (st < lastScrollTop && $mainSectionHeight < lastScrollTop){
					$header.classList.add('fixed')
					$header.classList.add('add')
				} else {
					if (lastScrollTop < $mainSectionHeight && $header.classList.contains('fixed')) {
						$header.classList.remove('add')
						setTimeout(() => {
							$header.classList.remove('fixed')
						}, 100)
					}
					if (lastScrollTop > $mainSectionHeight) {
						$header.classList.remove('add')
					}
				}
				lastScrollTop = st <= 0 ? 0 : st; 
			}, false);


		}

		
	}

	function mobileFixedHeader() {
		const $mainSection = document.querySelector('section.main')

		if($mainSection) {


			const $mainSectionHeight = document.querySelector('section.main').offsetHeight
			let $header = document.querySelector('.header')
			window.addEventListener("scroll", function(){
				var st = window.pageYOffset || document.documentElement.scrollTop; 
				if ($mainSectionHeight < st){
					$header.classList.add('fixed')
					$header.classList.add('add')
				} else {
					$header.classList.remove('add')
					$header.classList.remove('fixed')

				}
			}, false);

		}
	}

	function tablePadding () {
		$table = document.querySelectorAll('table')
		if($table) {
			$table.forEach(table => {
				table.setAttribute('cellpadding', '12')
			})
		}
	}

	function mapHover() {
		$map = document.querySelector('.warehouse-map')
		$mapHoverBlock = document.querySelector('.warehouse-map__hover')
		if($map) {
			$map.addEventListener('click', function() {
				$mapHoverBlock.style.display = 'none'
			})
		}
	}

	// Hidden scrollbar when arrows hidden
	function hiddenScrollBar() {
		$hiddenArrows = document.querySelectorAll('.slick-arrow.slick-hidden')
		$hiddenArrows.forEach(a => {
			if (a.previousElementSibling.classList.contains('progress')) {
				a.previousElementSibling.style.display = 'none';
			}
		})
	}

	function catalogSliderHeight() {
		$catalogWrapper = document.querySelector('.inner-catalog-content-slider')
		if($catalogWrapper) {
			$catalogWrapper.style.maxHeight = ($catalogWrapper.clientHeight / 2) + 30 + 'px'
		}
	}

	if(window.innerWidth <= 576) {
		$('.projects-slider').slick('unslick');
	}
	if(window.innerWidth >= 768) {
		fixedHeader()
	} else {
		mobileFixedHeader()
	}

	
	hamburgerMenu()
	showPhones()
	phoneMask()
	goBack()
	basicAnimation()
	dropdownMenu()
	aboutSectionAnimation()
	catalogSectionAnimation()
	certificatesSectionAnimation()
	partnersSectionAnimation()
	projectsSectionAnimation()
	newsSectionAnimation()
	contactsSectionAnimation()
	accordion()
	tablePadding()
	mapHover()
	initScrollBar('.certificates-gallery', '.certificates-gallery__progress')
	initScrollBar('.partners-slider', '.partners-slider__progress')
	initScrollBar('.projects-thumbs', '.projects-thumbs__progress')
	initScrollBar('.news-slider', '.news-slider__progress')
	initScrollBar('.sales-slider', '.sales-slider__progress')
	initScrollBar('.supply-slider', '.supply-slider__progress')
	initScrollBar('.logistics-slider', '.logistics-slider__progress')
	popupGallery('.certificates-gallery')
	hiddenScrollBar()
	catalogSliderHeight()
	

});
