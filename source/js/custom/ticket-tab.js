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
