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