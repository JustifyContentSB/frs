"use strict";

$(document).ready(function () {
    // Your code here
    financeSlider()
    menuToggle()
    featuresSlider()
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

function menuToggle() {
    if ($(window).width() < 1024) {
        let headerBurger = document.querySelector('.header__burger');
        let header = document.querySelector('.header__inner');
        let body = document.querySelector('body');
        $(headerBurger).on('click', function (e) {
            $(header).toggleClass('header__inner--active');
            $(body).toggleClass('no-scroll');
        })
    }
}

function featuresSlider() {
    if ($(window).width() < 768) {
        let features = new Swiper(".features__list", {
            slidesPerView: "auto",
            spaceBetween: 12,
        });
    }
}