
import { Header } from './components/header.js';
import { customSelect } from './components/customSelect.js';


document.addEventListener('DOMContentLoaded', function () {

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
  Header();

});
