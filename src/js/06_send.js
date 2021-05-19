/* eslint-disable no-undef */
/* eslint-disable strict */
const btn = document.querySelector('.js-create-card');
const responseElement = document.querySelector('.js-response');

function handlerClickCreate(e) {
  e.preventDefault();
  if (formData.name === '') {
    responseElement.innerHTML = 'Tienes que rellenar el campo nombre';
    responseElement.classList.remove('hidden');
  } else if (formData.job === '') {
    responseElement.innerHTML = 'Tienes que rellenar el campo puesto';
    responseElement.classList.remove('hidden');
  } else if (formData.email === '') {
    responseElement.innerHTML = 'Tienes que rellenar el campo email';
    responseElement.classList.remove('hidden');
  } else if (formData.photo === '') {
    responseElement.innerHTML = 'Tienes que añadir una imagen';
    responseElement.classList.remove('hidden');
  } else if (formData.github === '') {
    responseElement.innerHTML = 'Tienes que añadir tu usuario de GitHub';
    responseElement.classList.remove('hidden');
  } else if (formData.linkedin === '') {
    responseElement.innerHTML = 'Tienes que añadir tu usuario de Linkedin';
    responseElement.classList.remove('hidden');
  } else {
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(formData),
    })
      .then((response) => response.JSON())
      .then((data) => {
        if (data.success === false) {
          responseElement.innerHTML = 'Tienes que rellenar los datos';
          responseElement.classList.remove('js-hiddenTwitter');
        } else {
          responseElement.innerHTML = `Tu tarjeta ha sido creada: <a href="${data.cardURL}">`;
          responseElement.classList.remove('js-hiddenTwitter');
        }
      })
      .catch(() => {
        responseElement.innerHTML = 'Inténtalo más tarde';
        responseElement.classList.remove('js-hiddenTwitter');
      });
  }
}
btn.addEventListener('click', handlerClickCreate);
