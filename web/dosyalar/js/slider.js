const slides = document.querySelector('.slides');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1; // Son slayta git
  } else if (index >= totalSlides) {
    index = 0; // İlk slayta git
  } else {
    currentIndex = index; // Diğer durumlarda normal şekilde ayarla
  }

  const offset = currentIndex * -100 / totalSlides;
  slides.style.transform = `translateX(${offset}%)`;
}

function showNextSlide() {
  showSlide(currentIndex + 1); // Artırmadan önce `showSlide` fonksiyonunu çağır
}

function showPrevSlide() {
  showSlide(currentIndex - 1); // Artırmadan önce `showSlide` fonksiyonunu çağır
}

setInterval(showNextSlide, 5000); // 5 saniyede bir slide değişimi

// Manuel geçiş butonları
document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPrevSlide);

// Sayfa yüklendiğinde ilk slaytı göster
document.addEventListener('DOMContentLoaded', () => {
  showSlide(0); // İlk slaytı `showSlide` fonksiyonu ile göster
});
