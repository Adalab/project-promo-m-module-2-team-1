function handlerFill(){

  handlerColor(event);
  handlerInfo(event);
}

function handlerColor(event){
  
  const input = event.target;
  const inputValue = event.target.value;

  if(inputValue === 'coldcolors'){

    borderPreview.classList.remove('js-op2__wrapper');
    nameColorPreview.classList.remove('js-op2__name');
    circlePreview1.classList.remove('js-op2__circle');
    circlePreview2.classList.remove('js-op2__circle');
    circlePreview3.classList.remove('js-op2__circle');
    circlePreview4.classList.remove('js-op2__circle');
    iconPreview1.classList.remove('js-op2__icon');
    iconPreview2.classList.remove('js-op2__icon');
    iconPreview3.classList.remove('js-op2__icon');
    iconPreview4.classList.remove('js-op2__icon');

    borderPreview.classList.remove('js-op3__wrapper');
    nameColorPreview.classList.remove('js-op3__name');
    circlePreview1.classList.remove('js-op3__circle');
    circlePreview2.classList.remove('js-op3__circle');
    circlePreview3.classList.remove('js-op3__circle');
    circlePreview4.classList.remove('js-op3__circle');
    iconPreview1.classList.remove('js-op3__icon');
    iconPreview2.classList.remove('js-op3__icon');
    iconPreview3.classList.remove('js-op3__icon');
    iconPreview4.classList.remove('js-op3__icon');

    borderPreview.classList.add('js-op1__wrapper');
    nameColorPreview.classList.add('js-op1__name');
    circlePreview1.classList.add('js-op1__circle');
    circlePreview2.classList.add('js-op1__circle');
    circlePreview3.classList.add('js-op1__circle');
    circlePreview4.classList.add('js-op1__circle');
    iconPreview1.classList.add('js-op1__icon');
    iconPreview2.classList.add('js-op1__icon');
    iconPreview3.classList.add('js-op1__icon');
    iconPreview4.classList.add('js-op1__icon');

  }else if (inputValue === 'hotcolors'){

    borderPreview.classList.remove('js-op1__wrapper');
    nameColorPreview.classList.remove('js-op1__name');
    circlePreview1.classList.remove('js-op1__circle');
    circlePreview2.classList.remove('js-op1__circle');
    circlePreview3.classList.remove('js-op1__circle');
    circlePreview4.classList.remove('js-op1__circle');
    iconPreview1.classList.remove('js-op1__icon');
    iconPreview2.classList.remove('js-op1__icon');
    iconPreview3.classList.remove('js-op1__icon');
    iconPreview4.classList.remove('js-op1__icon');

    borderPreview.classList.remove('js-op3__wrapper');
    nameColorPreview.classList.remove('js-op3__name');
    circlePreview1.classList.remove('js-op3__circle');
    circlePreview2.classList.remove('js-op3__circle');
    circlePreview3.classList.remove('js-op3__circle');
    circlePreview4.classList.remove('js-op3__circle');
    iconPreview1.classList.remove('js-op3__icon');
    iconPreview2.classList.remove('js-op3__icon');
    iconPreview3.classList.remove('js-op3__icon');
    iconPreview4.classList.remove('js-op3__icon');

    borderPreview.classList.add('js-op2__wrapper');
    nameColorPreview.classList.add('js-op2__name');
    circlePreview1.classList.add('js-op2__circle');
    circlePreview2.classList.add('js-op2__circle');
    circlePreview3.classList.add('js-op2__circle');
    circlePreview4.classList.add('js-op2__circle');
    iconPreview1.classList.add('js-op2__icon');
    iconPreview2.classList.add('js-op2__icon');
    iconPreview3.classList.add('js-op2__icon');
    iconPreview4.classList.add('js-op2__icon');

  }else if (inputValue === 'complementary'){

    borderPreview.classList.remove('js-op1__wrapper');
    nameColorPreview.classList.remove('js-op1__name');
    circlePreview1.classList.remove('js-op1__circle');
    circlePreview2.classList.remove('js-op1__circle');
    circlePreview3.classList.remove('js-op1__circle');
    circlePreview4.classList.remove('js-op1__circle');
    iconPreview1.classList.remove('js-op1__icon');
    iconPreview2.classList.remove('js-op1__icon');
    iconPreview3.classList.remove('js-op1__icon');
    iconPreview4.classList.remove('js-op1__icon');

    borderPreview.classList.remove('js-op2__wrapper');
    nameColorPreview.classList.remove('js-op2__name');
    circlePreview1.classList.remove('js-op2__circle');
    circlePreview2.classList.remove('js-op2__circle');
    circlePreview3.classList.remove('js-op2__circle');
    circlePreview4.classList.remove('js-op2__circle');
    iconPreview1.classList.remove('js-op2__icon');
    iconPreview2.classList.remove('js-op2__icon');
    iconPreview3.classList.remove('js-op2__icon');
    iconPreview4.classList.remove('js-op2__icon');

    borderPreview.classList.add('js-op3__wrapper');
    nameColorPreview.classList.add('js-op3__name');
    circlePreview1.classList.add('js-op3__circle');
    circlePreview2.classList.add('js-op3__circle');
    circlePreview3.classList.add('js-op3__circle');
    circlePreview4.classList.add('js-op3__circle');
    iconPreview1.classList.add('js-op3__icon');
    iconPreview2.classList.add('js-op3__icon');
    iconPreview3.classList.add('js-op3__icon');
    iconPreview4.classList.add('js-op3__icon');

  }
}




function handlerInfo(event) {

    const input = event.target;
    const inputValue = event.target.value;
   
    if(input.classList.contains('js-inputName')){
      namePreview.innerHTML = inputValue;
      formData.name = inputValue;
    }else if(input.classList.contains('js-inputJob')){
      jobPreview.innerHTML = inputValue;
      formData.job = inputValue;
    }else if(input.classList.contains('js-inputEmail')){
      mailPreview.href += inputValue;
      formData.email = inputValue;
    }else if(input.classList.contains('js-inputTel')){
      telPreview.href += inputValue;
      formData.phone = inputValue;
    }else if(input.classList.contains('js-inputLinkedin')){
      linkedinPreview.href += inputValue;
      formData.linkedin = inputValue;
    }else if(input.classList.contains('.js-inputGitHub')){
      gitHubPreview.href += inputValue;
      formData.github = inputValue;
    }
  }
  
  
  form.addEventListener('change', handlerFill);
  
  
  