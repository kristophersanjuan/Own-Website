const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
  const imageWidth = images[0].clientWidth;
  carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Next Button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// Previous Button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Auto Slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}, 3000); // Change slide every 3 seconds

// Adjust carousel on window resize
window.addEventListener('resize', updateCarousel);