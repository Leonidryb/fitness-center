/* eslint-disable new-cap, no-undef, max-nested-callbacks, no-unused-vars */
'use strict';

(function () {
  var phoneInput = document.querySelector('#phone');
  var slider = document.querySelector('.swiper-container');
  var slider1 = document.querySelector('.swiper-container-1');
  var tabsBtnList = document.querySelectorAll('.ticket__limit-button');
  var anchor = document.querySelector('.header__link');

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

  // Ticket cards tab
  tabsBtnList.forEach(function (button) {
    button.addEventListener('click', function () {
      var ticketsBtnActive = document.querySelector('.ticket__limit-button--active');
      ticketsBtnActive.classList.remove('ticket__limit-button--active');
      button.classList.add('ticket__limit-button--active');

      var dataTab = button.getAttribute('data-tab');
      var tabsList = document.querySelectorAll('.ticket__tab');

      for (var i = 0; i < tabsList.length; i++) {
        // eslint-disable-next-line
        if (dataTab == i) {
          tabsList[i].classList.add('ticket__tab--show');
          tabsList[i].classList.remove('ticket__tab--hide');
        } else {
          tabsList[i].classList.remove('ticket__tab--show');
          tabsList[i].classList.add('ticket__tab--hide');
        }
      }
    });
  });

  // Scroll
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    var block = anchor.getAttribute('href');
    document.querySelector('' + block).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
})();
