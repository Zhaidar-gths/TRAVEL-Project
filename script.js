// let searchBtn = document.querySelector('#search-btn');
// let searchBar = document.querySelector('.search-bar-container');
// let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#from-close');

// window.onscroll = () => {
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active')
// }

// searchBtn.addEventListener('click', () => {
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active')
// });

// formBtn.addEventListener('click', () => {
//     searchBtn.classList.add('active');
// });


// formClose.addEventListener('click', () => {
//     searchBtn.classList.remove('active');
// });



// const searchBtn = document.getElementById('search-btn');
// const searchBar = document.querySelector('.search-bar-container');
// const loginBtn = document.getElementById('login-btn');
// const popup = document.getElementById('popup');
// const popupClose = document.getElementById('from-close');
// const overlay = document.getElementById('overlay');
// let videoBtn = document.querySelectorAll('.vid-btn')

// window.onscroll = () => {
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active')
// }

// searchBtn.addEventListener('click', () => {
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active')
// });



// //этот код для открытия окна логина
// loginBtn.addEventListener('click', () => {
//     popup.style.display = 'block';
//     overlay.style.display = 'block';
// });



// //этот код  для закрытия окна логина
// popupClose.addEventListener('click', () => {
//     popup.style.display = 'none';
//     overlay.style.display = 'none';
// });


// overlay.addEventListener('click', () => {
//     popup.style.display = 'none';
//     overlay.style.display = 'none';
// });

// popupClose.addEventListener('click', (event) => {
//     event.preventDefault();
// });

// // bacraund video
// videoBtn.forEach(btn =>{
//     btn.addEventListener('click',()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src=btn.getAttribute('data-src');
//         document.querySelector('#video-slider').src=src;
//     });
// });







// HTML ЭЛЕМЕНТТЕРІНЕ СІЛТЕМЕЛЕР АЛУ
const searchBtn = document.getElementById('search-btn');
const searchBar = document.querySelector('.search-bar-container');
const loginBtn = document.getElementById('login-btn');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('from-close');
const overlay = document.getElementById('overlay');
let videoBtn = document.querySelectorAll('.vid-btn');

// Проверка, правильно ли были найдены элементы
console.log(searchBtn); // Проверим элемент кнопки поиска
console.log(loginBtn); // Проверим элемент кнопки логина

// Добавим обработчики событий для кнопки поиска и кнопки логина
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    console.log(searchBar)
});

loginBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

popupClose.addEventListener('click', (event) => {
    event.preventDefault();
});




// БЕЙНЕ БАСҚАРУ ТҮЙМЕЛЕРІНЕ АРНАЛҒАН
document.querySelectorAll('.vid-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons Удалить «активный» класс со всех кнопок
        document.querySelectorAll('.vid-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add 'active' class to the clicked button   Получите источник видео из атрибута data-src нажатой кнопки.
        btn.classList.add('active');

        // Get the video source from the data-src attribute of the clicked button
        const src = btn.getAttribute('data-src');

        // Update the video source and play the video Обновите источник видео и воспроизведите видео.
        const video = document.getElementById('video-slider');
        video.src = src;
        video.play();
    });
});


