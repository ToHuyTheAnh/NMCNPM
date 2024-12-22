// Đóng mở mục menu
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Initialize Swiper
const swiper = new Swiper('.slide-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


// Đăng nhập 
const loginModalOpen = document.querySelector('.login-button');
const loginModalContainer = document.querySelector('.login-container');
const loginModalClose = document.querySelector('.login-close-icon');

loginModalOpen.addEventListener('click', function (e) {
    console.log('Đã click');
    loginModalContainer.classList.add('login-modal-open');
});

loginModalClose.addEventListener('click', function (e) {
    loginModalContainer.classList.remove('login-modal-open');
});