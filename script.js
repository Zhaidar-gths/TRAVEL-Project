

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


// localStorage  локальный хранилише ключ и значение арқылы сохранить етеміз
// addEventListener жазған собыйтияға обработка жасайды


function isAddedToCart(destination) {
// Здесь мы объявляем переменную cart, в которую сохраняем содержимое корзины из локального хранилища браузера.
//Если в локальном хранилище нет данных о корзине(или они не могут быть распарсены), мы устанавливаем значение по умолчанию - пустой массив[].
    const cart = JSON.parse(localStorage.getItem("travel")) || [];
// Мы используем метод find() для поиска элемента в массиве cart, у которого значение свойства id совпадает со значением свойства id переданного объекта destination.
// Если элемент найден, функция возвращает true, иначе false.
    return cart.find((p) => p.id == destination.id) != null;
}

function addToCart(destination) {
    const cart = localStorage.getItem("travel");
    const cartItems = JSON.parse(cart) || [];

//Мы проверяем, существует ли уже в корзине элемент с id, совпадающим с id переданного объекта destination.
//Если элемент уже есть в корзине, функция завершается без каких-либо дальнейших действий.
    if (cartItems.find(item => item.id == destination.id)) {
        return;
    }

// Если элемент с id destination.id не найден в корзине, мы добавляем его в массив cartItems,
// расширяя его свойствами из объекта destination и устанавливая свойство quantity в 1.
    cartItems.push({ ...destination, quantity: 1 });
// localStorage  локальный хранилише ключ и значение арқылы сохранить етеміз
    localStorage.setItem("travel", JSON.stringify(cartItems));
    window.location.reload();
}

//  function createTravelBoxes() {
const destinations = [
    // {
    //     id: 1,
    //     country: 'mumbai',
    //     img: 'https://imgcld.yatra.com/ytimages/image/upload/v1438931255/Mumbai_75.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis,nam!',
    //     price:1200
    // },
    // {
    //     id: 2,
    //     country: 'hawaii',
    //     img: 'https://th.bing.com/th/id/R.53b9e85906a849980dbfa7aea3393fd1?rik=3cDTNA3svqZaVw&pid=ImgRaw&r=0',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis,nam!',
    //     price: 2900
    // },
    // {
    //     id: 3,
    //     country: 'paris',
    //     img: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis,nam!',
    //     price:6500
    // },
    // {
    //     id: 4,
    //     country: 'tokyo',
    //     img: 'https://de.best-wallpaper.net/wallpaper/1920x1440/1607/Tokyo-Japan-beautiful-city-night-buildings-shops-streets-lights_1920x1440.jpg',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis,nam!',
    //     price:7000
    // },
    // {
    //     id: 5,
    //     country: 'egypt',
    //     img: 'https://media.gettyimages.com/id/96318973/photo/pyramids-egypt.jpg?b=1&s=170667a&w=0&k=20&c=-NkjNfT_VGIy9f6ca6bnyKvQtNC765cXCe1XCMtbSOc=',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis,nam!',
    //     price:2800
    // },
    // {
    //     id: 6,
    //     country: 'italy',
    //     img: 'https://th.bing.com/th/id/R.826ab3ddd16ab4af4021d45ad8878356?rik=6FkxPyS37dWNqQ&pid=ImgRaw&r=0',
    //     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis,nam!',
    //     price:4990
    // }


];

// console.log(JSON.stringify(destinations))

// const boxContainer = document.querySelector('.box-container');

//     destinations.forEach(destination => {
//         const box = document.createElement('div');
//         box.classList.add('box');
//         box.id = `box-${destination.id}`;

//         const image = document.createElement('img');
//         image.src = destination.imageUrl;
//         image.alt = '';

//         const content = document.createElement('div');
//         content.classList.add('content');

//         const heading = document.createElement('h3');
//         heading.innerHTML = `<ion-icon name="location-sharp"></ion-icon>${destination.location}`;

//         const paragraph = document.createElement('p');
//         paragraph.textContent = destination.description;

//         const stars = document.createElement('div');
//         stars.classList.add('stars');

//         for (let i = 0; i < 4; i++) {
//             const starIcon = document.createElement('ion-icon');
//             starIcon.setAttribute('name', 'star-sharp');
//             stars.appendChild(starIcon);
//         }

//         const halfStarIcon = document.createElement('ion-icon');
//         halfStarIcon.setAttribute('name', 'star-half-sharp');
//         stars.appendChild(halfStarIcon);

//         const price = document.createElement('div');
//         price.classList.add('prise');
//         price.innerHTML = `${destination.priceRange}`;

//         const button = document.createElement('a');
//         button.href = '#';
//         button.classList.add('btn');

//         if (isAddedToCart(destination)) {
//             button.textContent = " ADDED TO SHOPPING BAG ";
//             button.enabled = false;
//         } else {
//             button.textContent = " ADD TO SHOPPING BAG";
//             button.addEventListener("click", () => {
//                 addToCart(destination);
//             });
//         }

//         content.appendChild(heading);
//         content.appendChild(paragraph);
//         content.appendChild(stars);
//         content.appendChild(price);
//         content.appendChild(button);

//         box.appendChild(image);
//         box.appendChild(content);

//         boxContainer.appendChild(box);
//     });
// }
//  const url = 'https://65d6c4d9f6967ba8e3be85a2.mockapi.io/products'
//  fetch(url)
//       .then (response => response.json())
//       .then (data => {
//         data.forEach(destinations => {
//             box.appendChild(createProductCard(destinations))
//         });
//         box-container.appendChild(box);
//       })
//       .catch(error => console.error(error))


// createTravelBoxes();





function createTravelBoxes(destinations) {
    const boxContainer = document.querySelector('.box-container');

    destinations.forEach(destination => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.id = `box-${destination.id}`;

        const image = document.createElement('img');
        image.src = destination.img;
        image.alt = '';

        const content = document.createElement('div');
        content.classList.add('content');

        const heading = document.createElement('h3');
        heading.innerHTML = `<ion-icon name="location-sharp"></ion-icon>${destination.country}`;

        const paragraph = document.createElement('p');
        paragraph.textContent = destination.title;

        const stars = document.createElement('div');
        stars.classList.add('stars');

        for (let i = 0; i < 4; i++) {
            const starIcon = document.createElement('ion-icon');
            starIcon.setAttribute('name', 'star-sharp');
            stars.appendChild(starIcon);
        }
// позволяет вставить в конец какого-либо другой элемент
        const halfStarIcon = document.createElement('ion-icon');
        halfStarIcon.setAttribute('name', 'star-half-sharp');
        stars.appendChild(halfStarIcon);

        const price = document.createElement('div');
        price.classList.add('price');
        price.innerHTML = `${destination.price}$`;
        price.style.fontSize = '20px';
        price.style.color = 'grey';


        const button = document.createElement('a');
        button.href = '#';
        button.classList.add('btn');

        if (isAddedToCart(destination)) {
            button.textContent = "BOOKED";
            button.disabled = true;
        } else {
            button.textContent = "TO BOOK";
            button.addEventListener("click", () => {
                addToCart(destination);
            });
        }

        content.appendChild(heading);
        content.appendChild(paragraph);
        content.appendChild(stars);
        content.appendChild(price);
        content.appendChild(button);

        box.appendChild(image);
        box.appendChild(content);

        boxContainer.appendChild(box);
    });
}

const url = 'https://65d6c4d9f6967ba8e3be85a2.mockapi.io/products'
fetch(url)
    .then(response => response.json())
    .then(data => {
        createTravelBoxes(data);
    })
    .catch(error => console.error(error));





