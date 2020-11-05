/* eslint-disable no-unused-vars */
'use strict';
(function () {
  var anchor = document.querySelector('.header__link');

  if (anchor) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      var block = anchor.getAttribute('href');
      document.querySelector('' + block).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
})();

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

'use strict';
(function () {
  var tabsBtnList = document.querySelectorAll('.ticket__limit-button');

  if (tabsBtnList) {
    tabsBtnList.forEach(function (button) {
      button.addEventListener('click', function () {
        var ticketsBtnActive = document.querySelector('.ticket__limit-button--active');
        if (ticketsBtnActive) {
          ticketsBtnActive.classList.remove('ticket__limit-button--active');
          button.classList.add('ticket__limit-button--active');
        }

        var dataTab = Number(button.getAttribute('data-tab'));
        var tabsList = document.querySelectorAll('.ticket__tab');

        if (tabsList) {
          for (var i = 0; i < tabsList.length; i++) {
            if (dataTab === i) {
              tabsList[i].classList.add('ticket__tab--show');
              tabsList[i].classList.remove('ticket__tab--hide');
            } else {
              tabsList[i].classList.remove('ticket__tab--show');
              tabsList[i].classList.add('ticket__tab--hide');
            }
          }
        }
      });
    });
  }
})();
