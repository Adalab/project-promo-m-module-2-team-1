/* eslint-disable no-unused-vars */

'use strict';

//-----FORM-------------------------------------------------
const form = document.querySelector('.js-form');
const formData = {
  name: '',
  job : '',
  email : '',
  phone : '',
  linkedin : '',
  github : '',
  photo : '',
  palette : '1'
};

//------PREVIEW---------------------------------------------
const namePreview = document.querySelector('.js-namePreview');
const jobPreview = document.querySelector('.js-jobPreview');
const imgPreview = document.querySelector('.js-imgPreview');
const mailPreview = document.querySelector('.js-mailPreview');
const telPreview = document.querySelector('.js-telPreview');
const linkedinPreview = document.querySelector('.js-linkedinPreview');
const gitHubPreview = document.querySelector('.js-gitHubPreview');

//------COLLAPSABLES----------------------------------------

const headerClicks = document.querySelectorAll('.js-collapsible');


//------RESET-----------------------------------------------
const resetButton = document.querySelector('.js-resetButton');


//----INPUT-------------------------------------------------
const inputName = document.querySelector('.js-inputName');
const inputJob = document.querySelector('.js-inputJob');
const inputPhone = document.querySelector('.js-inputPhone');
const  inputEmail= document.querySelector('.js-inputEmail');
const  inputGitHub= document.querySelector('.js-inputGitHub');
const  inputLinkedin= document.querySelector('.js-inputLinkedin');
const inputColor1 = document.querySelector('.js-colorOption1');
const inputColor2 = document.querySelector('.js-colorOption2');
const inputColor3 = document.querySelector('.js-colorOption3');