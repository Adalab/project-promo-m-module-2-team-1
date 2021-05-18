/* eslint-disable strict */
/* eslint-disable no-undef */

function handleHeaderClick(event) {
  const hiddenSection = event.currentTarget.closest('.js-hidden');

  const hiddenSections = document.querySelectorAll('.js-hidden');

  for (const section of hiddenSections) {
    if (hiddenSection === section) {
      section.classList.toggle('hidden');
    } else {
      section.classList.add('hidden');
    }
  }
}

for (const headerClick of headerClicks) {
  headerClick.addEventListener('click', handleHeaderClick);
}

