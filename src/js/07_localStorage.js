/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable strict */
function setLocalStorage() {
  localStorage.setItem("formData", JSON.stringify(formData));
}

function getLocalStorage() {
  let savedForm = JSON.parse(localStorage.getItem("formData"));
  console.log(savedForm);

  //CONSERVAMOS LA PALETA GUARDADA
  if (savedForm !== null) {
    const paletteElements = document.querySelectorAll(".js-colorOption");
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === savedForm.palette) {
        paletteElement.checked = true;
      }
      const cardElement = document.querySelector(".js-cardElement");

      cardElement.classList.remove("opt1", "opt2", "opt3");
      cardElement.classList.add(`opt${savedForm.palette}`);
    }
    //VOLCAMOS DATOS A INPUTS
    inputName.value = savedForm.name;
    inputJob.value = savedForm.job;
    inputPhone.value = savedForm.phone;
    inputEmail.value = savedForm.email;
    inputGitHub.value = savedForm.github;
    inputLinkedin.value = savedForm.linkedin;
    profilePreview.value = savedForm.photo;

    //VOLCAMOS DATOS A OBJETO FORMDATA
    formData.name = savedForm.name;
    formData.job = savedForm.job;
    formData.photo = savedForm.photo;
    formData.phone = savedForm.phone;
    formData.email = savedForm.email;
    formData.github = savedForm.github;
    formData.linkedin = savedForm.linkedin;

    //VOLCAMOS DATOS A PREVIEW
    if (savedForm.name !== "") {
      namePreview.innerHTML = savedForm.name;
    } else {
      namePreview.innerHTML = "Nombre Apellido";
    }

    if (savedForm.job !== "") {
      jobPreview.innerHTML = savedForm.job;
    } else {
      jobPreview.innerHTML = "Front-end developer";
    }

    profileImage.style.backgroundImage = `url(${savedForm.photo})`;
    profilePreview.style.backgroundImage = `url(${savedForm.photo})`;

    mailPreview.href = `mailto:${savedForm.email}`;
    telPreview.href = `tel:+34${savedForm.phone}`;
    linkedinPreview.href = `https://www.linkedin.com/in/${savedForm.linkedin}`;
    gitHubPreview.href = `https://github.com/${savedForm.github}`;
  }
}

getLocalStorage();
