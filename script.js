// script.js

function setLanguage(lang) {
    // Cập nhật tiêu đề
    document.querySelector("header h1").textContent = languageData.title[lang];
    document.querySelector("header h2").textContent = languageData.subtitle[lang];
    
    // Cập nhật menu
    document.querySelector(".menu a[href='#home']").textContent = languageData.menu.home[lang];
    document.querySelector(".menu a[href='#menu']").textContent = languageData.menu.menu[lang];
    document.querySelector(".menu a[href='#gallery']").textContent = languageData.menu.gallery[lang];
    document.querySelector(".menu a[href='#contact']").textContent = languageData.menu.contact[lang];

    // Cập nhật phần cover
    document.querySelector(".cover h1").textContent = languageData.cover.title[lang];
    document.querySelector(".cover .book-now").textContent = languageData.cover.bookNow[lang];

    // Cập nhật phần our story
    document.querySelector(".our-story h2").textContent = languageData.ourStory.title[lang];
    document.querySelector(".our-story h3").textContent = languageData.ourStory.subtitle[lang];
    document.querySelector(".our-story p").textContent = languageData.ourStory.content[lang];

    // Cập nhật phần footer
    document.querySelector("#footer-description-title").textContent = languageData.footer.description.title[lang];
    document.querySelector("#footer-description-content").textContent = languageData.footer.description.content[lang];
}
