let mainSlider = new Swiper('.main-slider', {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	speed: 1000,
	effect: 'fade',

/* 	autoplay: {
		delay: 2000,
	}, */
	
	pagination: {
		el: '.main-slider__pagination',
		clickable: true,
	 },

});