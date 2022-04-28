"use strict";

$(document).ready(function () {
  // Your code here
  financeSlider();
  menuToggle();
  featuresSlider();
}); // Your functions here

function financeSlider() {
  var finance = new Swiper(".finance__slider-container", {
    navigation: {
      nextEl: ".finance__toggle-next",
      prevEl: ".finance__toggle-prev"
    }
  });
}

function menuToggle() {
  if ($(window).width() < 1024) {
    var headerBurger = document.querySelector('.header__burger');
    var header = document.querySelector('.header__inner');
    var body = document.querySelector('body');
    $(headerBurger).on('click', function (e) {
      $(header).toggleClass('header__inner--active');
      $(body).toggleClass('no-scroll');
    });
  }
}

function featuresSlider() {
  if ($(window).width() < 768) {
    var features = new Swiper(".features__list", {
      slidesPerView: "auto",
      spaceBetween: 12
    });
  }
} // document.addEventListener('DOMContentLoaded', () => {
//     const accordions = document.querySelectorAll('.accordion');
//     accordions.forEach(el => {
//         el.addEventListener('click', (e) => {
//             const self = e.currentTarget;
//             const control = self.querySelector('.accordion__control');
//             const content = self.querySelector('.accordion__content');
//             if (self.classList.contains('open')) {
//                 accordions.forEach(elem => {
//                     elem.classList.remove('open');
//                     elem.querySelector('.accordion__content').style.maxHeight = null;
//                 });
//             } else {
//                 accordions.forEach(elem => {
//                     elem.classList.remove('open');
//                     elem.querySelector('.accordion__content').style.maxHeight = null;
//                 });
//                 self.classList.add('open');
//             }
//             if (self.classList.contains('open')) {
//                 control.setAttribute('aria-expanded', true);
//                 content.setAttribute('aria-hidden', false);
//                 content.style.maxHeight = content.scrollHeight + 'px';
//             } else {
//                 control.setAttribute('aria-expanded', false);
//                 content.setAttribute('aria-hidden', true);
//                 content.style.maxHeight = null;
//             }
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.vacancy__item');
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.vacancy__top');
      var content = self.querySelector('.vacancy__info');

      if (self.classList.contains('vacancy__item--open')) {
        accordions.forEach(function (elem) {
          elem.classList.remove('vacancy__item--open');
          elem.querySelector('.vacancy__info').style.maxHeight = null;
        });
      } else {
        accordions.forEach(function (elem) {
          elem.classList.remove('vacancy__item--open');
          elem.querySelector('.vacancy__info').style.maxHeight = null;
        });
        self.classList.add('vacancy__item--open');
      }

      if (self.classList.contains('vacancy__item--open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
    $('.vacancy__btn').on('click', function (e) {
      e.preventDefault();
    });
  });
});