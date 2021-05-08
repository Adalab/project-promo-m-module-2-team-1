
'use strict';

console.log('>> Ready :)');

const form = document.querySelector('.js-form');
const namePreview = document.querySelector('.js-namePreview');
const jobPreview = document.querySelector('.js-jobPreview');
const imgPreview = document.querySelector('.js-imgPreview');
const mailPreview = document.querySelector('.js-mailPreview');
const telPreview = document.querySelector('.js-telPreview');
const linkedinPreview = document.querySelector('.js-linkedinPreview');
const gitHubPreview = document.querySelector('.js-gitHubPreview');



function handlerFill(event) {

  const input = event.target;
  const inputValue = event.target.value;
 
  if(input.classList.contains('js-inputName')){
    namePreview.innerHTML = inputValue;
  }else if(input.classList.contains('js-inputJob')){
    jobPreview.innerHTML = inputValue;
  }else if(input.classList.contains('js-inputImg')){
    imgPreview.src = inputValue;
  }else if(input.classList.contains('js-inputEmail')){
    mailPreview.href += inputValue;
  }else if(input.classList.contains('js-inputTel')){
    telPreview.href += inputValue;
  }else if(input.classList.contains('js-inputLinkedin')){
    linkedinPreview.href += inputValue;
  }else if(input.classList.contains('.js-inputGitHub')){
    gitHubPreview.href += inputValue;
  }
}


form.addEventListener('change', handlerFill);


