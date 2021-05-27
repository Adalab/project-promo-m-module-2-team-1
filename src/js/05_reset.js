/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

function updateForm(){
  formData.name = '';
  formData.job = '';
  formData.email = '';
  formData.phone = '';
  formData.linkedin = '';
  formData.github = '';
  formData.photo = '';
  formData.palette = '1';
  console.log(formData);
}

function updatePreview(){
  namePreview.innerHTML = 'Nombre Apellido';
  jobPreview.innerHTML = 'Front-end developer';
  profileImage.style.backgroundImage = 'url(./assets/images/listen-logo.png)';
  profilePreview.style.backgroundImage = 'url(./assets/images/listen-logo.png)';
  mailPreview.href = 'mailto:';
  telPreview.href = 'tel:+34';
  linkedinPreview.href = 'https://www.linkedin.com/in/';
  gitHubPreview.href = 'https://github.com/';
}

function updateInputs(){
  inputName.value = '';
  inputJob.value = '';
  inputPhone.value = '';
  inputEmail.value = '';
  inputGitHub.value = '';
  inputLinkedin.value = '';
}

function resetPalettes(){

  const checkedPalette = document.querySelector('.js-colorOption:checked');
  checkedPalette.checked = false;
  const paletteDefault = document.querySelector('.js-paletteDefault');
  paletteDefault.checked = true;
  const cardElement = document.querySelector('.js-cardElement');

  cardElement.classList.remove('opt1', 'opt2', 'opt3');
  cardElement.classList.add( 'opt1');
}

function handleReset() {

  updateForm();
  updatePreview();
  updateInputs();
  resetPalettes();

  localStorage.clear();
  responseElement.innerHTML ='';
}

resetButton.addEventListener('click', handleReset);
