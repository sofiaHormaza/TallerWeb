//Carrousel gallery
const galleryStripe = document.querySelector('.gallery__stripe');
const rightArrow = document.querySelector('.gallery__arrow:last-child');
const leftArrow = document.querySelector('.gallery__arrow:first-child');
const product = document.querySelector('.gallery__product');
let current = 0;

rightArrow.addEventListener('click', function () {
    current++;
    if (current >= galleryStripe.children.length - 2) {
        current = 0;
    }

    const style = window.getComputedStyle(product);
    const width = product.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);

    galleryStripe.style.transform = 'translate(-' + (width * current) + 'px, 0px)';

});

leftArrow.addEventListener('click', function () {
    current--;

    if (current <= 0) {
        current = 0;
    }

    const style = window.getComputedStyle(product);
    const width = product.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);

    galleryStripe.style.transform = 'translate(-' + (width * current) + 'px, 0px)';

    console.log(current);
})


//Slider
const slider = document.querySelector('.feature__slider');
const img = document.querySelector('.feature__compare img:nth-child(2)');

function handleSlider() {
    img.style.width = (slider.value * 100) + '%';
}
slider.addEventListener('input', handleSlider);

//Hamburger menu
const open = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.burger-menu');
const close =document.querySelector('.burger-menu__close');
const opacity = document.querySelector('.opacity');

function openHandle() {
    menu.classList.add('burger-menu--show');
    opacity.classList.add('opacity--show');
}
open.addEventListener('click', openHandle);

function closeHandle() {
    menu.classList.remove('burger-menu--show');
    opacity.classList.remove('opacity--show');
}
close.addEventListener('click',closeHandle);
