function handleReset() {
  formData.name = "Nombre Apellido";
  formData.job = "Front-end developer";
  formData.email = "";
  formData.phone = "";
  formData.linkedin = "";
  formData.github = "";
  formData.photo = "";
  formData.palette = "opt1";
  console.log(formData);

  namePreview.innerHTML = formData.name;
  jobPreview.innerHTML = formData.job;
  // imgPreview.style.backgroundImage = url('../images/avatar-provisional.png');
  mailPreview.href = "mailto:";
  telPreview.href = "tel:+34";
  linkedinPreview.href = "https://www.linkedin.com/in/";
  gitHubPreview.href = "https://github.com/";

  inputName.value = "";
  inputJob.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
  inputGitHub.value = "";
  inputLinkedin.value = "";
}

resetButton.addEventListener("click", handleReset);
