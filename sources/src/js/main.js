"use strict";

$(document).ready(function () {
   // Your code here
   financeSlider()
   menuToggle()
   featuresSlider()
   maskFunc()
   popupShow()
   popupClose()
   overlayClose()
});

// Your functions here

function financeSlider() {
   let finance = new Swiper(".finance__slider-container", {
      navigation: {
         nextEl: ".finance__toggle-next",
         prevEl: ".finance__toggle-prev",
      },
   });
}

let headerBurger = document.querySelector('.header__burger');
let header = document.querySelector('.header__inner');
let body = document.querySelector('body');

function menuToggle() {
   if ($(window).width() < 1024) {
      $(headerBurger).on('click', function (e) {
         $(header).toggleClass('header__inner--active');
         $(body).toggleClass('no-scroll');
      })

      $('.header__menu-toggle--submenu').on('click', function (e) {
         e.preventDefault();
         $(this).parent('.header__menu-item').toggleClass('header__menu-item--active')
      })
   }
}

function popupShow() {
   $('.js-popup-toggle').on('click', function (e) {
      e.preventDefault();
      console.log('sass')
      $('.popup').addClass('popup--active')
      $('.popup-overlay').addClass('popup-overlay--active')
      $('body').addClass('no-scroll')
      $(header).removeClass('header__inner--active');
   })
}

function popupClose() {
   $('.popup__close').on('click', function (e) {
      e.preventDefault();
      $(this).parent('.popup__header').parent('.popup').removeClass('popup--active')
      $('.popup-overlay').removeClass('popup-overlay--active')
      $('body').removeClass('no-scroll')
   })
}

function overlayClose() {
   $('.popup-overlay').on('click', function (e) {
      $(this).removeClass('popup-overlay--active')
      $('.popup').removeClass('popup--active')
      $('body').removeClass('no-scroll')
   })
}

function featuresSlider() {
   if ($(window).width() < 768) {
      let features = new Swiper(".features__list", {
         slidesPerView: "auto",
         spaceBetween: 12,
      });
   }
}

document.addEventListener('DOMContentLoaded', () => {
   const accordions = document.querySelectorAll('.vacancy__item');

   accordions.forEach(el => {
      el.addEventListener('click', (e) => {
         const self = e.currentTarget;
         const control = self.querySelector('.vacancy__top');
         const content = self.querySelector('.vacancy__info');

         if (self.classList.contains('vacancy__item--open')) {
            accordions.forEach(elem => {
               elem.classList.remove('vacancy__item--open');
               elem.querySelector('.vacancy__info').style.maxHeight = null;
            });
         } else {
            accordions.forEach(elem => {
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

document.addEventListener('DOMContentLoaded', () => {
   const accordions = document.querySelectorAll('.vacancy__item');

   accordions.forEach(el => {
      const self = accordions.currentTarget;
      const control = self.querySelector('.vacancy__top');
      const content = self.querySelector('.vacancy__info');

      $('.js-vacancy-toggle').on('click', function (e) {
         e.preventDefault();
         if (self.classList.contains('vacancy__item--open')) {
            accordions.forEach(elem => {
               elem.classList.remove('vacancy__item--open');
               elem.querySelector('.vacancy__info').style.maxHeight = null;
            });
         } else {
            accordions.forEach(elem => {
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
      })

      $('.vacancy__btn').on('click', function (e) {
         e.preventDefault();
      });
   });
});

$('.credit-list').select2({
   placeholder: 'Выберите тип кредита:',
});

$('.location-list').select2({
   placeholder: 'Ваш регион проживания:',
});

function maskFunc() {
   let elements = document.querySelectorAll('.phone');
   let maskOptions = {
      mask: '+7(000)000-00-00',
      lazy: false
   }

   let masks = [];

   elements.forEach(function (element, index) {
      masks[index] = new IMask(element, maskOptions);
   })
}


