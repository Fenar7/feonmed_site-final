const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
let transitioning = false;

function showSlide(index) {
  if (transitioning || index === currentIndex) return;
  transitioning = true;

  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');

  setTimeout(() => {
    transitioning = false;
    currentIndex = index;
  }, 500); // Match the duration of the CSS transition
}

prevButton.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

nextButton.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
});

function autoSlide() {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

// Automatically advance the slider every 3 seconds (3000 milliseconds)
let autoSlideInterval = setInterval(autoSlide, 3000);

// Pause auto sliding when hovering over the carousel
sliderContainer.addEventListener('mouseover', () => {
  clearInterval(autoSlideInterval);
});

// Resume auto sliding when the mouse leaves the carousel
sliderContainer.addEventListener('mouseout', () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
});

// Initial slide setup
showSlide(currentIndex);
slides[currentIndex].classList.add('active'); // Add 'active' class to the initial slide
