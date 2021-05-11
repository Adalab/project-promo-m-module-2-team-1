
'use strict';

console.log('>> Ready :)');

//-----FORM-------------------------------------------------
const form = document.querySelector('.js-form');
const formData = {};

//------PREVIEW---------------------------------------------
const namePreview = document.querySelector('.js-namePreview');
const jobPreview = document.querySelector('.js-jobPreview');
const imgPreview = document.querySelector('.js-imgPreview');
const mailPreview = document.querySelector('.js-mailPreview');
const telPreview = document.querySelector('.js-telPreview');
const linkedinPreview = document.querySelector('.js-linkedinPreview');
const gitHubPreview = document.querySelector('.js-gitHubPreview');

//------COLORS----------------------------------------------
const borderPreview = document.querySelector('.js-op1__wrapper');
const nameColorPreview = document.querySelector('.js-op1__name');
const circlePreview1 = document.querySelector('.js-op1__circle1');
const circlePreview2 = document.querySelector('.js-op1__circle2');
const circlePreview3 = document.querySelector('.js-op1__circle3');
const circlePreview4 = document.querySelector('.js-op1__circle4');
const iconPreview1 = document.querySelector('.js-op1__icon1');
const iconPreview2 = document.querySelector('.js-op1__icon2');
const iconPreview3 = document.querySelector('.js-op1__icon3');
const iconPreview4 = document.querySelector('.js-op1__icon4');



//------COLLAPSABLES----------------------------------------

const headerClicks = document.querySelectorAll(".js-collapsible");