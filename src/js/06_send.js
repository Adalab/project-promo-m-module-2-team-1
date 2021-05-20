/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */
const btn = document.querySelector(".js-create-card");
const responseElement = document.querySelector(".js-response");

function handlerClickCreate(e) {
  e.preventDefault();
  console.log(formData);
  if (formData.name === "") {
    responseElement.innerHTML = "Tienes que rellenar el campo Nombre completo";
    responseElement.classList.remove("js-hiddenTwitter");
  } else if (formData.job === "") {
    responseElement.innerHTML = "Tienes que rellenar el campo Puesto";
    responseElement.classList.remove("js-hiddenTwitter");
  } else if (formData.email === "") {
    responseElement.innerHTML = "Tienes que rellenar el campo Email";
    responseElement.classList.remove("js-hiddenTwitter");
  } else if (formData.photo === "") {
    responseElement.innerHTML = "Tienes que añadir una Imagen de perfil";
    responseElement.classList.remove("js-hiddenTwitter");
  } else if (formData.github === "") {
    responseElement.innerHTML = "Tienes que añadir tu usuario de GitHub";
    responseElement.classList.remove("js-hiddenTwitter");
  } else if (formData.linkedin === "") {
    responseElement.innerHTML = "Tienes que añadir tu usuario de Linkedin";
    responseElement.classList.remove("js-hiddenTwitter");
  } else {
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          responseElement.innerHTML = "Tienes que rellenar todos los campos";
          responseElement.classList.remove("js-hiddenTwitter");
        } else {
          // responseElement.innerHTML = `Tu tarjeta ha sido creada: <a href="${data.cardURL}">${data.cardURL}</a>`;
          // responseElement.classList.remove('js-hiddenTwitter');
          responseElement.innerHTML += `<h3 class="text-set-up">La tarjeta ha sido creada:</h3>`;
          responseElement.innerHTML += `<p><a href="${data.cardURL}" class="link-set-up js-twitter-link" target="_blank">${data.cardURL}</a></p>`;
          responseElement.innerHTML += `<a class="twitter-button js-btn-twitter" target="_blank">
        <i class="fa fa-twitter"></i> Compartir en Twitter
      </a>`;
          btn.disabled = true;
          btn.classList.add("btn-disable");
          responseElement.classList.add("set-up-container-top");
          const twitterLink = document.querySelector(".js-btn-twitter");
          twitterLink.setAttribute(
            "href",
            `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${data.cardURL}`
          );
        }
      })
      .catch(() => {
        responseElement.innerHTML = "Inténtalo de nuevo más tarde";
        responseElement.classList.remove("js-hiddenTwitter");
      });
  }
}
btn.addEventListener("click", handlerClickCreate);
