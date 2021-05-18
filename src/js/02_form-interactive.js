/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable strict */
function handlerColor(){

  const checkedRadio = document.querySelector('.js-colorOption:checked');
  const inputValue = checkedRadio.value;

  const cardElement = document.querySelector('.js-cardElement');

  cardElement.classList.remove('opt1', 'opt2', 'opt3');


  if(inputValue === '1'){
    cardElement.classList.add('opt1');

  }else if (inputValue === '2'){
    cardElement.classList.add('opt2');

  }else if (inputValue === '3'){
    cardElement.classList.add('opt3');
  }
}

//PINTAR PREVIEW CADA VEZ QUE HAYA CAMBIO INPUT

function paintPreview(event){

  const inputName = event.target.name;
  const inputValue = event.target.value;

  if(inputName === 'name'){
    namePreview.innerHTML = formData.name === '' ? 'Nombre Apellidos' : formData.name;
  }else if(inputName === 'job'){
    jobPreview.innerHTML = formData.job === '' ? 'Front-end developer' : formData.job;
  }else if(inputName === 'email'){
    mailPreview.href += formData.email === '' ? '' : formData.email;
  }else if(inputName === 'phone'){
    telPreview.href += formData.phone === '' ? '' : formData.phone;
  }else if(inputName === 'linkedin'){
    linkedinPreview.href += formData.linkedin === '' ? '' : formData.linkedin;
  }else if(inputName === 'github'){
    gitHubPreview.href += formData.github === '' ? '' : formData.github;
  }
}

function setLocalStorage(){
  localStorage.setItem('formData', JSON.stringify(formData));

}

//ALMACENAR EL VALOR DE LOS INPUTS EN UN OBJETO FORMDATA

function handlerFormData(event) {

  const inputName = event.target.name;
  const inputValue = event.target.value;

  formData[inputName] = inputValue;

  setLocalStorage();
  paintPreview(event);
}


function handlerFill(){

  handlerColor(event);
  handlerFormData(event);
}

function getLocalStorage(){

  let savedForm = JSON.parse(localStorage.getItem('formData'));
  console.log(savedForm);


  if(savedForm!==null && savedForm!==''){

    inputName.value = savedForm.name;
    inputJob.value = savedForm.job;
    inputPhone.value = savedForm.phone;
    inputEmail.value = savedForm.email;
    inputGitHub.value = savedForm.github;
    inputLinkedin.value = savedForm.linkedin;
    //inputPalette = savedForm.palette;
  }

}

getLocalStorage();
form.addEventListener('change', handlerFill);

