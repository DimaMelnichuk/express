
/***************** Menu-btn ********************/
let menu_burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
menu_burger.addEventListener("click", function (e) {
	menu.classList.toggle('active');
	menu_burger.classList.toggle('active');
});

/***************** WebP ********************/
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

/***************** loaded ********************/
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}

/***************** ibg adaptive inline bg ********************/
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}		
	}
}
ibg();
let mainSlider = new Swiper('.main-slider', {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	speed: 500,
	effect: 'fade',

	autoplay: {
		delay: 3000,
	},
	
	pagination: {
		el: '.main-slider__pagination',
		clickable: true,
	 },

});

let newsSlider = new Swiper('.news-page__slider-container', {
	loop: false,
	grabCursor: true,
	spaceBetween: 30,
	speed: 500,

	navigation: {
		nextEl: '.news-page__slider-next',
		prevEl: '.news-page__slider-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		// when window width is >= 640px
		600: {
			slidesPerView: 2,
		}
	 }

});

let lifestyleSlider = new Swiper('.lifestyle-page__slider-container', {
	loop: false,
	slidesPerView: 1,
	slidesPerColumnFill: "row",
	slidesPerColumn: 1,
	grabCursor: true,
	speed: 500,
	
	navigation: {
		nextEl: '.lifestyle-page__button-next',
		prevEl: '.lifestyle-page__button-prev',
	 },

	 breakpoints: {
		601: {
			slidesPerColumn: 2,
		},
		800: {
			slidesPerColumn: 3,
		}
	 }
});

let fashionSlider = new Swiper('.fashion-page__slider-container', {
	loop: false,
	slidesPerView: 1,
	grabCursor: true,
	speed: 500,

	navigation: {
		nextEl: '.fashion-page__slider-next',
		prevEl: '.fashion-page__slider-prev',
	 },
});



let sportSlider = new Swiper('.sport-news__slider-container', {
	loop: false,
	grabCursor: true,
	speed: 500,
	spaceBetween: 30,
	slidesPerColumnFill: 'row',
	slidesPerColumn: 1,
	slidesPerView: 1,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.sport-news__slider-next',
		prevEl: '.sport-news__slider-prev',
	},

	breakpoints: {
		600: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
			slidesPerColumn: 2,
		}
	 }
});