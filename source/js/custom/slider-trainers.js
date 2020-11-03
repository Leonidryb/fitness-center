/* eslint-disable no-unused-vars */
'use strict';
(function () {
  var slider = document.querySelector('.swiper-container');

  if (slider) {
    var mySwiper = new window.Swiper(slider, {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
          slidesPerGroup: 3,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 3,
        }
      }
    });
  }
})();
