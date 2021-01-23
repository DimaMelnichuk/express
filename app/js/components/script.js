let mainSlider = new Swiper('.main-slider', {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	speed: 500,
	effect: 'fade',

/* 	autoplay: {
		delay: 2000,
	}, */
	
	pagination: {
		el: '.main-slider__pagination',
		clickable: true,
	 },

});

let lifestyleSlider = new Swiper('.lifestyle-page__slider-container', {
	loop: false,
	slidesPerView: 1,
	effect: 'fade',
	slidesPerColumnFill: "row",
	grabCursor: true,
	speed: 500,
	
	navigation: {
		nextEl: '.lifestyle-page__button-next',
		prevEl: '.lifestyle-page__button-prev',
	 },

	 breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerColumn: 1,
		},
		// when window width is >= 640px
		600: {
			slidesPerColumn: 3,
		}
	 }
});

let fashionSlider = new Swiper('.fashion-page__slider-container', {
	loop: false,
	slidesPerView: 1,
	grabCursor: true,
	speed: 500,
	effect: 'fade',

	navigation: {
		nextEl: '.fashion-page__slider-next',
		prevEl: '.fashion-page__slider-prev',
	 },
});

let newsSlider = new Swiper('.news-page__slider-container', {
	loop: false,
	grabCursor: true,
	speed: 500,
	effect: 'fade',
	slidesPerView: 1,


	navigation: {
		nextEl: '.news-page__slider-next',
		prevEl: '.news-page__slider-prev',
	},

});

let sportSlider = new Swiper('.sport-news__slider-container', {
	loop: false,
	grabCursor: true,
	speed: 500,
	effect: 'fade',
	slidesPerColumnFill: 'row',
	slidesPerColumn: 2,
	slidesPerView: 2,
	slidesPerGroup: 2,

	navigation: {
		nextEl: '.sport-news__slider-next',
		prevEl: '.sport-news__slider-prev',
	},
});