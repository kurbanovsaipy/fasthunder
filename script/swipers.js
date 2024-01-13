const prize_swiper = new Swiper('.prize_swiper', {
    // Optional parameters
    effect: 'cards',
    grabCursor: true,
    centeredSlides: true,
    /*cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 2,
        rotate: true,
    },*/
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const location_swiper = new Swiper('.location_swiper', {
  grabCursor: true,
  centeredSlides: false,
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});