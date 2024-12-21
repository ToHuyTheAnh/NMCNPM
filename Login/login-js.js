const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Bật menu bằng click
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Tắt menu bằng cách click
// Cách 1
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Cách 2
//menuCloseButton.addEventListener("click", () => menuOpenButton.click());

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

// const nameMethod = {
//     "CASH": "Tiền mặt",
//     "BANK_TRANSFER": "Chuyển khoản",
//     "CREDIT_CARD": "Thẻ tín dụng"
// }

// console.log(nameMethod["CASH"]);