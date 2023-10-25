const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

const content = document.querySelectorAll('.hero-text');
const heroImages = document.querySelectorAll('.hero-img');

let currentIndex = 0;

function showSlide(index) {
    content.forEach((item, i) => {
      item.classList.remove('active');
      heroImages[i].classList.remove('active');
    });
  
    content[index].classList.add('active');
    heroImages[index].classList.add('active');
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + content.length) % content.length;
    showSlide(currentIndex);
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % content.length;
    showSlide(currentIndex);
  });
  
  function autoSlide() {
    currentIndex = (currentIndex + 1) % content.length;
    showSlide(currentIndex);
  }
  
  // Automatically advance the slider every 3 seconds (3000 milliseconds)
  setInterval(autoSlide, 3000);