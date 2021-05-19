/* eslint-disable no-undef */
/* eslint-disable strict */
const btn = document.querySelector(".js-create-card");
const responseElement = document.querySelector(".js-response");

function handlerClickCreate(e) {
  e.preventDefault();
  if (formData.name === "") {
    responseElement.innerHTML = "Tienes que rellenar el campo Nombre completo";
    responseElement.classList.remove("hidden");
  } else if (formData.job === "") {
    responseElement.innerHTML = "Tienes que rellenar el campo Puesto";
    responseElement.classList.remove("hidden");
  } else if (formData.email === "") {
    responseElement.innerHTML = "Tienes que rellenar el campo Email";
    responseElement.classList.remove("hidden");
  } else if (formData.photo === "") {
    responseElement.innerHTML = "Tienes que añadir una Imagen de perfil";
    responseElement.classList.remove("hidden");
  } else if (formData.github === "") {
    responseElement.innerHTML = "Tienes que añadir tu usuario de GitHub";
    responseElement.classList.remove("hidden");
  } else if (formData.linkedin === "") {
    responseElement.innerHTML = "Tienes que añadir tu usuario de Linkedin";
    responseElement.classList.remove("hidden");
  } else {
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.JSON())
      .then((data) => {
        if (data.success === false) {
          responseElement.innerHTML = "Tienes que rellenar todos los campos";
          responseElement.classList.remove("js-hiddenTwitter");
        } else {
          responseElement.innerHTML = `Tu tarjeta ha sido creada: <a href="${data.cardURL}">`;
          responseElement.classList.remove("js-hiddenTwitter");
        }
      })
      .catch(() => {
        responseElement.innerHTML = "Inténtalo de nuevo más tarde";
        responseElement.classList.remove("js-hiddenTwitter");
      });
  }
}
btn.addEventListener("click", handlerClickCreate);
