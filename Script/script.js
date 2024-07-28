let slideIndex = 0;
const images = [
    '/Assets/coffeechat1.jpg',
    '/Assets/coffeechat2.jpg',
    '/Assets/coffeechat3.jpg',
    '/Assets/coffeechat4.jpg'
];

function showSlides() {
    const header = document.querySelector('.header');
    header.style.backgroundImage = `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(${images[slideIndex]})`;

    slideIndex++;
    if (slideIndex >= images.length) {
        slideIndex = 0;
    }

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
