//TODO: Toggle accordion

export const toggleAccordion = () => {
    const accordionHeader = document.querySelectorAll('.accordion__item--header');

    accordionHeader.forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.closest('.accordion__item');

            accordionHeader.forEach(item => {
                if (item !== this) {
                    item.classList.remove('show');
                }
            });

            const allAccordionItems = document.querySelectorAll('.accordion__item');
            allAccordionItems.forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('show');
                }
            });

            accordionItem.classList.toggle('show');
        });
    });
};
