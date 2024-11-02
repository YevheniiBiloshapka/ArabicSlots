
import { Header } from './components/header.js';
import { customSelect } from './components/customSelect.js';
import initModal from './components/modal.js'
import heroShowMore from './components/heroShowMore.js';
import casinoCards from './components/casinoCards.js';

const testSelect = () => {
  // удалить
  const testSelect = document.querySelector('[data-action="test-select"]');
  const iconSelect = document.querySelector('[data-action="icon-select"]');
  const smallTestSelect = document.querySelector('[data-action="test-select-small"]');
  const iconTestSelect = document.querySelector('[data-action="icon-select-small"]');

  if (testSelect) {
    customSelect(testSelect, (selectedValue) => {
      console.log('%ctypePaper:', 'color: coral; ', selectedValue);
    });
  }
  if (iconSelect) {
    customSelect(iconSelect, (selectedValue) => {
      console.log('%ctypePaper:', 'color: coral; ', selectedValue);
    });
  }
  if (smallTestSelect) {
    customSelect(smallTestSelect, (selectedValue) => {
      console.log('%ctypePaper:', 'color: coral; ', selectedValue);
    });
  }
  if (iconTestSelect) {
    customSelect(iconTestSelect, (selectedValue) => {
      console.log('%ctypePaper:', 'color: coral; ', selectedValue);
    });
  }
};
const showTableContent = () => {

  const tableContentBox = document.querySelectorAll('[data-target-table-content]');
  if (tableContentBox) {
    tableContentBox.forEach(table => {
      const btn = table.querySelector('[data-table-content-btn]');
      btn.addEventListener('click',()=>{
        table.classList.toggle("show")
      })
      }
    )
  }
};
const loadMoreBtn = () => {
  const loadMoreBtns = document.querySelectorAll('[data-target-loading]');
  if (loadMoreBtns) {
    loadMoreBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.add('loading');
        btn.setAttribute('disabled', 'true');

        setTimeout(() => {
          btn.classList.remove('loading');
          btn.removeAttribute('disabled');
        }, 4000);
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {


  testSelect()
  Header();
  initModal()
  heroShowMore()
  casinoCards()
  loadMoreBtn()
  showTableContent()

});
