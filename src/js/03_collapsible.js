"use strict";

const headerClick = document.querySelector(".js-collapsible");

const hiddenSection = document.querySelector(".js-hidden");

// PRUEBA 1

const handleHeaderClick = () => {
  hiddenSection.classList.toggle("js-hidden");
};
headerClick.addEventListener("click", handleHeaderClick);

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
