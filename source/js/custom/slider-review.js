/* eslint-disable no-unused-vars */
'use strict';
(function () {
  var slider1 = document.querySelector('.swiper-container-1');

  if (slider1) {
    var mySwiper1 = new window.Swiper(slider1, {
      loop: true,
      slidesPerView: 1,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
})();
