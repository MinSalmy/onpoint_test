const buttonContinue = document.querySelector(".continue");
const buttonDetails = document.querySelector(".details");
const main = document.querySelector("main");
const header = document.querySelector("header"); 

buttonContinue.addEventListener('click', () => {
  document.querySelector('.page-2').scrollIntoView({ behavior: "smooth" });
});
header.addEventListener('click', () => {
  document.querySelector('.page-1').scrollIntoView({ behavior: "smooth" });
})
/*
  появление сперматозоидов версия 2
*/
/*
main.addEventListener('scroll', (event) => {let index = 0;
    if (event.target.scrollLeft % event.target.offsetWidth === 0) {
    
  spermImagesPage2.forEach(image => {
    image.classList.toggle(`sperm-animation-${index % 2}`);
    index++;
  })
  }
});/*
main.addEventListener('scroll', () => {
  
  console.log(window.scrollTo)
}); */

//скроллер
const textPage2 = document.querySelector('.page-2 .text');
const scrollbar = document.querySelector('.scrollbar');
scrollbar.value = 0;
scrollbar.min = 0;
scrollbar.max = textPage2.scrollHeight - textPage2.clientHeight;
scrollbar.addEventListener('input', () => {
  textPage2.scrollTop = scrollbar.value;
});
textPage2.addEventListener('scroll', () => {
  scrollbar.value = textPage2.scrollTop;
})


/*
  bubble random animation
*/
const bubbleImages = document.querySelectorAll('img[class^="bubble-"]');
bubbleImages.forEach(bubble => {
  const randomFinal = ["-10", "-20", "-30", "10", "20", "30"];
  const randomNumberX = Math.floor(Math.random() * randomFinal.length);
  const randomPercentX = randomFinal[randomNumberX];
  const randomNumberY = Math.floor(Math.random() * randomFinal.length);
  const randomPercentY = randomFinal[randomNumberY];
  bubble.animate([
    // keyframes
    { transform: `none` },
    { transform: `translateX(${randomPercentX}%) translateY(${randomPercentY}%) scale(1.1)` },
  ], {
    // timing options
    duration: Math.floor(Math.random() * 3 + 2) * 1000,
    iterations: 2000000, // "Infinity"
    direction: "alternate",
  })
})

//обработка диалогового окна
const detailsButton = document.querySelector('.details.action');
const dialogAdvantages = document.querySelector('.dialog-advantages');
detailsButton.addEventListener('touchend', () => {
  dialogAdvantages.show();  
});
dialogAdvantages.addEventListener('touchend', (event) => {if (event.target === dialogAdvantages) dialogAdvantages.close();});
document.querySelector('.close-button').addEventListener('touchend', () => {
  dialogAdvantages.close();
})

// каруселька
class Carousel {    
    constructor (slides, dots) {
        this.slides = slides;
        this.dots = dots;
        this.currentSlide = 0;
        this.amount = slides.length;
    }
    #toggleClass(elementPosition, classname) {
      this.slides[elementPosition].classList.toggle(classname);
      this.dots[elementPosition].classList.toggle(classname);

      /*this.slides[this.currentSlide].classList.toggle('active');
      this.dots[this.currentSlide].classList.toggle('active');*/
    }
    nextSlide() {console.log('work')
        if (this.currentSlide === this.amount - 1) return;
        this.#toggleClass(this.currentSlide, 'active');
        /*this.#toggleClass();*/
        this.currentSlide++;
        this.#toggleClass(this.currentSlide, 'active'); 
                
    }
    prevSlide() {
        if (this.currentSlide === 0) return;
        this.#toggleClass(this.currentSlide, 'active');
        this.currentSlide--;
        this.#toggleClass(this.currentSlide, 'active'); console.log('work')
    }
    setSlide(slideIndex) {
        if (slideIndex >= this.amount || slideIndex < 0) return;
        this.#toggleClass(this.currentSlide, 'active');
        this.currentSlide = slideIndex;
        this.#toggleClass(this.currentSlide, 'active');
    }
}

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const carousel = new Carousel(slides, dots);
for (let index = 0; index < dots.length; index++) dots[index].addEventListener('click', carousel.setSlide[index]);
document.querySelector('.prev').addEventListener('click', () => {carousel.prevSlide(); console.log('clicked')});
document.querySelector('.next').addEventListener('click', () => {carousel.nextSlide(); console.log('clicked')});

/*
  появление сперматозоидов версия 1
*/
const spermImagesPage2 = document.querySelectorAll('.page-2 img[class^="sperm-"]');
const observer = new IntersectionObserver(entries => {
    let index = 0;
    // перебор записей
    if (entries[0].isIntersecting) {
      spermImagesPage2.forEach(image => {
        image.classList.toggle(`sperm-animation-${index % 2}`);
        index++;
      })
    }
});
observer.observe(document.querySelector('.sperm-1'));




