"use strict";

const infoPopup = document.querySelector('.info-popup');

if (infoPopup) {
    const infoButtonOpen = document.querySelector('.info');
    const infoButtonClose = document.querySelector('.info-popup__close');

    infoButtonOpen.addEventListener('click', () => {
        infoPopup.classList.toggle('snow');
    });

    infoButtonClose.addEventListener('click', () => {
        infoPopup.classList.remove('snow');
    });
}
