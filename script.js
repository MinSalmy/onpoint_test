const buttonHome = document.querySelector(".home");
const buttonContinue = document.querySelector(".continue");
const buttonDetails = document.querySelector(".details");

buttonContinue.addEventListener('click', () => {
    document.querySelector('.page-2').scrollIntoView({behavior: "smooth"});
});