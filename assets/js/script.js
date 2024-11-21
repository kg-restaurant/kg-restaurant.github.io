'use strict';
let currentLang = 'vi';
function setLanguage(languageCode) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (languageData[key] && languageData[key][languageCode]) {
            if (element.tagName.toLowerCase() === 'div' || element.tagName.toLowerCase() === 'p') {
                // Nếu phần tử có thể chứa HTML, dùng innerHTML
                element.innerHTML = languageData[key][languageCode];  
            } else {
                // Nếu phần tử chỉ chứa văn bản, dùng innerText và thay thế <br> bằng ký tự xuống dòng
                const textWithBreaks = languageData[key][languageCode].replace(/<br>/g, '\n');
                element.innerText = textWithBreaks;
            }
        }
    });
    
    currentLang = languageCode;
}

document.getElementById('vi-language').addEventListener('click', () => setLanguage('vi'));
document.getElementById('en-language').addEventListener('click', () => setLanguage('en'));
document.getElementById('zh-language').addEventListener('click', () => setLanguage('zh'));

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


function openMenuModal(){
    let url;
    if (currentLang === 'vi') {
        url = "https://kingsgrill.vn/menu/vi/index.html";
    } else if (currentLang === 'en') {
        url = "https://kingsgrill.vn/menu/en/index.html";
    } else if (currentLang === 'zh') {
        url = "https://kingsgrill.vn/menu/zh/index.html";
    }

    document.querySelector("#menuModal iframe").src = url;
    document.getElementById("menuModal").style.display = "flex";
}

document.getElementById('menu-link').addEventListener('click', () => openMenuModal());

document.getElementById("menu-link").addEventListener("click", function (event) {
    event.preventDefault();
    
    let url;
    if (currentLang === 'vi') {
        url = "https://kingsgrill.vn/menu/vi/index.html";
    } else if (currentLang === 'en') {
        url = "https://kingsgrill.vn/menu/en/index.html";
    } else if (currentLang === 'zh') {
        url = "https://kingsgrill.vn/menu/zh/index.html";
    }

    document.querySelector("#menuModal iframe").src = url;
    document.getElementById("menuModal").style.display = "flex";
});
document.getElementById("CloseMenuModal").addEventListener("click", function (event) {
    document.getElementById('menuModal').style.display = 'none';
});


const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function() {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function() {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function() {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function() {
    if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function() {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos--;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function() {
    autoSlideInterval = setInterval(function() {
        slideNext();
    }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function() {
    clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function(event) {

    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;

    // reverse the number eg. 20 -> -20, -5 -> 5
    x = x - (x * 2);
    y = y - (y * 2);

    for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
        y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }

});