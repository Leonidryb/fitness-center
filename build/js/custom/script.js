/* eslint-disable new-cap, no-undef, max-nested-callbacks, no-unused-vars */
'use strict';

(function () {
  var phoneInput = document.querySelector('#phone');
  var slider = document.querySelector('.swiper-container');
  var slider1 = document.querySelector('.swiper-container-1');
  // Phone mask
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  IMask(phoneInput, maskOptions);

  // Slider trainers
  var mySwiper = new Swiper(slider, {
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

  // Slider review
  var mySwiper1 = new Swiper(slider1, {
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})();
