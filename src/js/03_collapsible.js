"use strict";

const headerClicks = document.querySelectorAll(".js-collapsible");

// PRUEBA FOR OF
for (const headerClick of headerClicks) {
  headerClick.addEventListener("click", handleHeaderClick);
}
function handleHeaderClick(event) {
  const hiddenSection = event.currentTarget.closest(".js-hidden");
  const hiddenSections = document.querySelectorAll(".js-hidden");

  for (const section of hiddenSections) {
    if (hiddenSection === section) {
      section.classList.toggle("hidden");
    } else {
      section.classList.add("hidden");
    }
  }
}

// PRUEBA 1
/*
const handleHeaderClick = () => {
  hiddenSection.classList.toggle("js-hidden");
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
