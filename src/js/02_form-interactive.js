

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

//PINTAR PREVIEW CADA VEZ QUE HAYA CAMBIO INPUT

function paintPreview(event){

  const inputName = event.target.name;
  const inputValue = event.target.value;

  if(inputName === 'name'){
    namePreview.innerHTML = inputValue;
  }else if(inputName === 'job'){
    jobPreview.innerHTML = inputValue;
  }else if(inputName === 'email'){
    mailPreview.href += inputValue;
  }else if(inputName === 'phone'){
    telPreview.href += inputValue;
  }else if(inputName === 'linkedin'){
    linkedinPreview.href += inputValue;
  }else if(inputName === 'github'){
    gitHubPreview.href += inputValue;
  }
}

//ALMACENAR EL VALOR DE LOS INPUTS EN UN OBJETO FORMDATA

function handlerFormData(event) {

    const inputName = event.target.name;
    const inputValue = event.target.value;
   
    if(inputName === 'name'){
      formData.name = inputValue;
    }else if(inputName === 'job'){
      formData.job = inputValue;
    }else if(inputName === 'email'){
      formData.email = inputValue;
    }else if(inputName === 'phone'){
      formData.phone = inputValue;
    }else if(inputName === 'linkedin'){
      formData.linkedin = inputValue;
    }else if(inputName === 'github'){
      formData.github = inputValue;
    }
    paintPreview(event);
  }
  

  function handlerFill(){

    handlerColor(event);
    handlerFormData(event);
  }

  
  form.addEventListener('change', handlerFill);
  
  
  