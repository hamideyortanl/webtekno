const slides = document.querySelector('.slides2');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide2').length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let interval;

function updateButtons() {
  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentIndex === totalSlides - 3) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1; 
  } else if (index >= totalSlides) {
    index = 0; 
  } else {
    currentIndex = index;
  }

  const offset = currentIndex * -100 / totalSlides;
  slides.style.transform = `translateX(${offset}%)`;


  updateButtons();
  controlAutoSlide();
}

function showNextSlide() {
  showSlide(currentIndex + 1); 
}

function showPrevSlide() {
  showSlide(currentIndex - 1); 
}

function controlAutoSlide() {
  if (currentIndex !== totalSlides - 3) {
    if (!interval) {
      interval = setInterval(showNextSlide, 5000);
    }
  } else {
    clearInterval(interval);
    interval = null;
  }
}


nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

document.addEventListener('DOMContentLoaded', () => {
  showSlide(0);
  updateButtons();
  controlAutoSlide(); 
});
