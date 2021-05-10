"use strict";

// FUNCIÓN OK ----------------------------------------------------

const headerClick = document.querySelector(".js-collapsible");

const hiddenSection = document.querySelector(".js-hidden");

const designSection = document.querySelector(".js-design");
const shareSection = document.querySelector(".js-share");

const handleHeaderClick = () => {
  hiddenSection.classList.toggle("js-hidden");
};
headerClick.addEventListener("click", handleHeaderClick);

//_________________________________________________________________

//____________________________________________________________________________
// PRUEBA CONDICIONAL
/*
const handleHeaderClick = () => {
  hiddenSection.classList.toggle("js-hidden");
  
  if (shareSection.classList === ("js-hidden) {
    shareSection.classList.remove("js-hidden");
  } else {
    shareSection.classList.add("js-hidden");
  }
};

headerClick.addEventListener("click", handleHeaderClick);

*/

// PRUEBA 2
/*
function hiddenPart(event) {
  hiddenSection.classList.toggle("js-hidden");
}
headerClick.addEventListener("click", hiddenPart);
*/

// PRUEBA 3
/*
headerClick.onclick = () => {
  hiddenSection.classList.toggle("js-hidden");
};
*/

// PRUEBA 4
/*
headerClick.addEventListener("click", () => {
  console.log("CLICK");
});
*/
