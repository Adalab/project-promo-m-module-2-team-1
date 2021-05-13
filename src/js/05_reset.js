
function handleReset(){

    formData.name = 'Nombre Apellido';
    formData.job = 'Front-end developer';
    formData.email = '';
    formData.phone = '';
    formData.linkedin = '';
    formData.github = '';
        
    namePreview.innerHTML = formData.name;
    jobPreview.innerHTML = formData.job;
    mailPreview.href = "mailto:";
    telPreview.href = "tel:+34";
    linkedinPreview.href = "https://www.linkedin.com/in/";
    gitHubPreview.href = "https://github.com/";

    inputName.value = '';
    inputJob.value = '';
    inputPhone.value = '';
    inputEmail.value = '';
    inputGitHub.value = '';
    inputLinkedin.value = '';

}

resetButton.addEventListener("click", handleReset);