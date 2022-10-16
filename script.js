const buttonHome = document.querySelector(".home");
const buttonContinue = document.querySelector(".continue");
const buttonDetails = document.querySelector(".details");

buttonContinue.addEventListener('click', () => {
    document.querySelector('.page-2').scrollIntoView({behavior: "smooth"});
});



/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/
//сделать либо слайдер для 3 слайда, либо попробовать на всю страницу, для 3 слайда добавить доты со стрелочками снизу
class Slide {    
    constructor (slides) {
        this.slides = slides;
        this.currentSlide = 0;
        this.amount = slides.length;
    }
    nextSlide() {
        if (this.currentSlide === this.amount - 1) return;
        this.slides[this.currentSlide].classList.toggle('active');
        this.currentSlide++;
        this.slides[this.currentSlide].classList.toggle('active');
    }
    prevSlide() {
        if (this.currentSlide === 0) return;
        this.slides[this.currentSlide].classList.toggle('active');
        this.currentSlide--;
        this.slides[this.currentSlide].classList.toggle('active');
    }
    setSlide(slideIndex) {
        if (slideIndex >= this.amount || slideIndex < 0) return;
        this.slides[this.currentSlide].classList.toggle('active');
        this.currentSlide = slideIndex;
        this.slides[this.currentSlide].classList.toggle('active');
    }
}

const spermImagesPage2 = document.querySelectorAll('.page-2 img[class^="sperm-"]');
console.log(spermImagesPage2);
// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
    let index = 0;
    // перебор записей
    if (entries[0].isIntersecting) {
      spermImagesPage2.forEach(image => {
        image.classList.toggle(`.sperm-animation-${index % 2}`);
        index++;
      })
    }
});

// Сообщить наблюдателю, какие элементы следует отслеживать
observer.observe(document.querySelector('.sperm-1'));