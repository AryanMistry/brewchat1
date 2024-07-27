let slideIndex = 0;
const images = [
    'coffeechat1.jpg',
    'coffeechat2.jpg',
    'coffeechat3.jpg',
    'coffeechat4.jpg'
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
