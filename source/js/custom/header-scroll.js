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
