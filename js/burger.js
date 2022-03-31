"use sctrict";

const menuButtonOpen = document.querySelector('.icon-menu');
const menuButtonClose = document.querySelector('.close-icon-menu');
const menu = document.querySelector('.header__menu');
const logoMenu = document.querySelector('.logo__text');

menuButtonOpen.addEventListener("click", open);
menuButtonClose.addEventListener("click", close);

function open(){
    menu.classList.add('active');
    document.getElementById('logo-text').style.fill = '#ffffff';
    document.body.style.overflow = 'hidden';
    menuButtonOpen.style.display = 'none';
    menuButtonClose.style.display = 'block';
}

function close(){
    menu.classList.remove('active');
    document.getElementById('logo-text').style.fill = '#000000';
    menu.classList.remove('active');
    document.body.style.overflow = 'visible';
    menuButtonClose.style.display = 'none';
    menuButtonOpen.style.display = 'flex';
}