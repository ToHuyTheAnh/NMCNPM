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


// Đóng mở mục đăng nhập
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

const logInApi = "http://localhost:8080/project/auth/login";
const logOutApi = "http://localhost:8080/project/auth/logout";
const resgisterApi = "http://localhost:8080/project/auth/register";

// Hoạt động đăng nhập 
const loginButton = document.querySelector('.form-login-button');

function loginAction(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    fetch(logInApi, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Đăng nhập thất bại. Vui lòng kiểm tra lại!');
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            callback(data);
        })
        .catch(function (error) {
            console.error('Error:', error);
            alert('Có lỗi xảy ra. Vui lòng thử lại sau!', 'error');
        });
}

loginButton.addEventListener('click', function (e) {
    loginModalContainer.classList.remove('login-modal-open');
    let userName = document.querySelector('.login-user-name').value;
    let password = document.querySelector('.login-password').value;

    var userAccount = {
        username: userName,
        password: password
    }
    console.log(userAccount);
    loginAction(userAccount, function (response) {
        console.log(response);
    });
});