let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let bookBtn = document.querySelector('#bookdiv');
let bookBtn2 = document.querySelector('#bookdiv2');
let bookBtn3 = document.querySelector('#bookdiv3');
let bookBtn4 = document.querySelector('#bookdiv4');
let bookBtn5 = document.querySelector('#bookdiv5');
let bookBtn6 = document.querySelector('#bookdiv6');
let bookForm = document.querySelector('.book');
let formClose = document.querySelector('#form-close');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    bookForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

bookBtn.addEventListener('click', () =>{
  bookForm.classList.add('active');
});

bookBtn2.addEventListener('click', () =>{
  bookForm.classList.add('active');
});

bookBtn3.addEventListener('click', () =>{
  bookForm.classList.add('active');
});

bookBtn4.addEventListener('click', () =>{
  bookForm.classList.add('active');
});

bookBtn5.addEventListener('click', () =>{
  bookForm.classList.add('active');
});

bookBtn6.addEventListener('click', () =>{
  bookForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
  bookForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});