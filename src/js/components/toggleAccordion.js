//TODO: Toggle accordion

export const toggleAccordion = () => {
  const accordion = document.querySelectorAll('[data-accordion]');

  if (accordion) {
    accordion.forEach(item => {
      const accordionHeader = item.querySelector('[data-target-accordion]');
      if (accordionHeader) {
        accordionHeader.addEventListener('click', () => {
          item.classList.toggle('show');
        });
      }

    });
  }

};
