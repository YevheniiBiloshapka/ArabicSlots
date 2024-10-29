import controlBodyScroll from './bodyScrollControl.js'

const handleLanguageSwitcher = () => {
  const selects = document.querySelectorAll('[data-action="header-language-switcher"]');

  selects.forEach(select => {
    const selectWrapper = select.querySelector('.select__wrapper');
    const field = selectWrapper.querySelector('.select__wrapper--field');
    const fieldIcon = field.querySelector('.input--icon__before');
    const fieldValue = field.querySelector('.select__wrapper--field-value');
    const dropdownList = selectWrapper.querySelector('.select__dropdown-list');

    field.addEventListener('click', () => {
      const isOpen = select.classList.contains('open');
      select.classList.toggle('open', !isOpen);
    });
    dropdownList.querySelectorAll('.select__dropdown-item').forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedValue = item.getAttribute('data-value');
        fieldIcon.querySelector('use').setAttribute('href', `../img/icons/icons.svg#${selectedValue}`);
        fieldValue.textContent = selectedValue;
        const input = select.querySelector('.select__input');
        if (input) input.value = selectedValue;
        dropdownList.querySelectorAll('.select__dropdown-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');

        select.classList.remove('open');
      });
    });
    document.addEventListener('click', (e) => {
      if (!selectWrapper.contains(e.target)) {
        select.classList.remove('open');
      }
    });
  });
};

export const Header = ()=>{
  const burgerBtn = document.querySelector('[data-action="show-nav"]');
  const headerNav = document.querySelector('[data-action="header-nav"]');
  const navDropDownBtns = document.querySelectorAll('[data-action="show-dropdown"]');
  const navItems = document.querySelectorAll('[data-action="nav-item"]');

  const openBtn = document.querySelector('[data-action="search-open"]');
  const closeBtn = document.querySelector('[data-action="search-close"]');
  const searchBox = document.querySelector('[data-action="search-box"]');

  
  // Открыть Поиск
  const openSearchInput = () => {

    function toggleModal() {
      searchBox.classList.toggle('show');
      openBtn.classList.toggle('show');
      burgerBtn.classList.toggle('isHidden');

      burgerBtn.classList.remove('show');
      headerNav.classList.remove('show');

      const isHiddenWrapper = searchBox.classList.contains('show');
      controlBodyScroll(isHiddenWrapper);
    }
    openBtn.addEventListener('click', toggleModal);
    closeBtn.addEventListener('click', toggleModal);
    document.addEventListener('click', function(event) {
      const isClickInside = searchBox.contains(event.target) || openBtn.contains(event.target);
      if (!isClickInside && searchBox.classList.contains('show')) {
        toggleModal();
      }
    });
  };
  // Открыть Меню
  const openNavigation = () => {
    function toggleModal() {
      searchBox.classList.remove('show');
      closeBtn.classList.remove('show');
      burgerBtn.classList.remove('isHidden');
      burgerBtn.classList.toggle('show');
      headerNav.classList.toggle('show');
      removeShowClassNavItem()
      const isHiddenWrapper = headerNav.classList.contains('show');
      controlBodyScroll(isHiddenWrapper);
    }
    burgerBtn.addEventListener('click', toggleModal);
  };
  // Открыть dropdown menu мобайл
  const removeShowClassNavItem = () => {
    navItems.forEach((item) => item.classList.remove('show'));
  };
  const showDropDownNav = () => {
      navDropDownBtns.forEach((button) => {
        button.addEventListener('click', function() {
          const navItem = button.closest('.header__nav--item');
          navItem.classList.toggle('show');
        });
      });
  };

  // TODO: inputSearch нужно удалить это просто как должно выглядеть
  const autoCompleteSearch = () => {
    const searchInput = document.querySelector('[data-value="search-input"]');
    const recommendations = document.querySelector('[data-action="reccomendations"]');
    const results = document.querySelector('[data-action="results"]');
    const notFound = document.querySelector('[data-action="notFound"]');

    searchInput.addEventListener('input', () => {
      const value = searchInput.value.trim();

      if (value === '') {
        recommendations.style.display = 'block';
        results.style.display = 'none';
      } else {
        recommendations.style.display = 'none';
        notFound.style.display = 'none';
        results.style.display = 'block';
      }
    });
  };

  openSearchInput()
  openNavigation()
  showDropDownNav()
  autoCompleteSearch()
  handleLanguageSwitcher()

}

