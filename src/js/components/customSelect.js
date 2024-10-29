export const customSelect = (select, onChange) => {
    const selectWrapper = select.querySelector('.select__wrapper');
    const field = selectWrapper.querySelector('.select__wrapper--field');
    const input = selectWrapper.querySelector('.select__input');
    const dropdownList = selectWrapper.querySelector('.select__dropdown-list');
    const fieldValue = selectWrapper.querySelector('.select__wrapper--field-value');

    // Показать/скрыть выпадающий список при нажатии на поле
    field.addEventListener('click', () => {
        const isOpen = select.classList.contains('open');
        select.classList.toggle('open', !isOpen);
    });

    // Обработка выбора элемента
    dropdownList.querySelectorAll('.select__dropdown-item').forEach((item) => {
        item.addEventListener('click', () => {
            const selectedText = item.querySelector('p').textContent;
            const selectedValue = item.getAttribute('data-value');

            // Устанавливаем значение в input и поле
            fieldValue.textContent = selectedText;
            input.value = selectedValue;

            // Убираем активный класс со всех элементов и добавляем к текущему
            dropdownList.querySelectorAll('.select__dropdown-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');

            select.classList.remove('open');
            if (typeof onChange === 'function') {
                onChange(selectedValue);
            }
        });
    });

    // Закрытие выпадающего списка при клике вне селекта
    document.addEventListener('click', (e) => {
        if (!selectWrapper.contains(e.target)) {
            select.classList.remove('open');
        }
    });
};
