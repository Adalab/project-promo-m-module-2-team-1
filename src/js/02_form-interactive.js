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
  
  
  