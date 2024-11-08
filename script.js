let currentLang = 'vi';
function setLanguage(lang) {
    currentLang = lang;
    document.querySelector("#logo-title").textContent = languageData.title[lang];
    document.querySelector("#logo-subtitle").textContent = languageData.subtitle[lang];
    document.querySelector("#home-link").textContent = languageData.menu.home[lang];
    document.querySelector("#menu-link").textContent = languageData.menu.menu[lang];
    document.querySelector("#gallery-link").textContent = languageData.menu.gallery[lang];
    document.querySelector("#contact-link").textContent = languageData.menu.contact[lang];
    
    const coverTitle = document.querySelector(".cover h1");
    if (coverTitle) coverTitle.textContent = languageData.cover.title[lang];
    
    const bookNowBtn = document.querySelector(".cover .book-now");
    if (bookNowBtn) bookNowBtn.textContent = languageData.cover.bookNow[lang];
    
    const ourStoryTitle = document.querySelector(".our-story h2");
    if (ourStoryTitle) ourStoryTitle.textContent = languageData.ourStory.title[lang];
    
    const ourStorySubtitle = document.querySelector(".our-story h3");
    if (ourStorySubtitle) ourStorySubtitle.textContent = languageData.ourStory.subtitle[lang];
    
    const ourStoryContent = document.querySelector(".our-story p");
    if (ourStoryContent) ourStoryContent.textContent = languageData.ourStory.content[lang];
    
    const footerDescTitle = document.querySelector("#footer-description-title");
    if (footerDescTitle) footerDescTitle.textContent = languageData.footer.description.title[lang];
    
    const footerDescContent = document.querySelector("#footer-description-content");
    if (footerDescContent) footerDescContent.textContent = languageData.footer.description.content[lang];
}

document.getElementById("menu-link").addEventListener("click", function (event) {
    event.preventDefault();
    
    let url;
    if (currentLang === 'vi') {
        url = "https://kingsgrill.vn/";
    } else if (currentLang === 'en') {
        url = "https://kingsgrill.vn/en";
    } else if (currentLang === 'zh') {
        url = "https://kingsgrill.vn/zh";
    }

    document.querySelector("#menuModal iframe").src = url;
    document.getElementById("menuModal").style.display = "flex";
});

document.getElementById("btnBooking").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("contactModal").style.display = "flex";
    const contactTitle = document.getElementById("contact-title");
    contactTitle.textContent = languageData.contact.title[currentLang];
});


function openModal() {
    // document.getElementById('menuModal').style.display = 'block';
    document.getElementById('menuModal').style.display = 'flex';
    
    // Chuyển header sang trạng thái đã cuộn
    const header = document.querySelector("header");
    const logo = header.querySelector(".logo");
    if (logo) {
        logo.innerHTML = `<img src="./img/logo.png" alt="Full Logo" style="height: 50px;">
                        <div class="logo-text">
            <div id="logo-title"style="font-size: 25px; color: #E4C590;">KING's GRILL</div>
            <span id="logo-subtitle" style="padding-top: 50px; color: #E4C590; letter-spacing: 6px; margin-top: -10px;">RESTAURANT</span>
        </div>
        </div>`;
    }
    header.classList.add("sticky");
}
document.getElementById("CloseMenuModal").addEventListener("click", function (event) {
    document.getElementById('menuModal').style.display = 'none';
});
document.getElementById("CloseContactModal").addEventListener("click", function (event) {
    document.getElementById('contactModal').style.display = 'none';
});


const contactModal = document.getElementById('contactModal');
window.addEventListener("click", function(event) {
    if (event.target === contactModal) {
        contactModal.style.display = "none";  
    }
});
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
        const logo = header.querySelector(".logo");
        if (logo) {
            logo.innerHTML = `<img src="./img/logo.png" alt="Full Logo" style="height: 50px;">
                            <div class="logo-text">
                    <div id="logo-title"style="font-size: 25px; color: #E4C590;">KING's GRILL</div>
                    <span id="logo-subtitle" style="padding-top: 50px; color: #E4C590; letter-spacing: 6px; margin-top: -10px;">RESTAURANT</span>
                </div>
                </div>`;
        }
    } else {
        const logo = header.querySelector(".logo");
        if (logo) {
            logo.innerHTML = `
                <div style="display: block; justify-items: center; align-content: center;">
                    <img src="./img/logo.png" alt="King's Grill Logo" style="display: block;height: 70px;" />
                    <div id="logo-title"style="font-size: 25px; color: #E4C590;">KING's GRILL</div>
                    <span id="logo-subtitle" style="padding-top: 50px; color: #E4C590; letter-spacing: 5px;">RESTAURANT</span>
                </div>
            `;
        }
    }
  });


window.addEventListener("load", function() {
    // preloader.classList.add("loaded");
    // document.body.classList.add("loaded");
});
  function toggleMenu() {
    // const menuToggle = document.querySelector(".menuToggle");
    // const navigation = document.querySelector(".navigation");
    // menuToggle.classList.toggle("active");
    // navigation.classList.toggle("active");
  }
'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function() {
    // preloader.classList.add("loaded");
    // document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

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
    navbar?.classList.toggle("active");
    overlay?.classList.toggle("active");
    document.body?.classList.toggle("nav-active");
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

    if (header && header.classList) {
        if (isScrollBottom) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }
        lastScrollPos = window.scrollY;
    }
};

window.addEventListener("scroll", function() {
    if (window.scrollY >= 50) {
        // header.classList.add("active");
        // backTopBtn.classList.add("active");
        hideHeader();
    } else {
        // header.classList.remove("active");
        // backTopBtn.classList.remove("active");
    }
});


/**
 * auto slide
 */

// let autoSlideInterval;

// const autoSlide = function() {
//     autoSlideInterval = setInterval(function() {
//         slideNext();
//     }, 7000);
// }

// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function() {
//     clearInterval(autoSlideInterval);
// });

// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

// window.addEventListener("load", autoSlide);




const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function(event) {

    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;

    x = x - (x * 2);
    y = y - (y * 2);

    for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
        y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }

});