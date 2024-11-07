//TODO: Toggle accordion

export const toggleAccordion = () => {
  const accordionHeader = document.querySelectorAll('[data-accordion]');

  accordionHeader.forEach(item => {
    const accordionHeader = item.querySelector('[data-target-accordion]');
    accordionHeader.addEventListener('click', () => {
      item.classList.toggle('show');
    });
  });
};
