const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

function goToSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  const translateValue = -index * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${translateValue}%)`;
  });

  currentIndex = index;
}

setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 3000);
