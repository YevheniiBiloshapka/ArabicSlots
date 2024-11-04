//TODO: Toggle accordion

export const toggleAccordion = () => {
    const accordionHeader = document.querySelectorAll('[data-accordion]');

    accordionHeader.forEach(item => {
        const accordionBtn = item.querySelector('[data-target-accordion]')
        accordionBtn.addEventListener('click', ()=>{
            item.classList.toggle('show')
        })
    });
};
