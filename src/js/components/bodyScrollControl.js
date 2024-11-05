export default function controlBodyScroll(isOpen) {
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  const header = document.querySelector('header');

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  const scrollbarWidth = getScrollbarWidth();

  if (isOpen) {

    if (window.innerWidth > 768) {
      body.style.paddingRight = `${scrollbarWidth}px`;
      header.style.paddingRight = `${scrollbarWidth}px`;
    }
    body.classList.add('modal-open');
    html.style.overflowY = 'hidden';
  } else {
    body.style.paddingRight = '';
    header.style.paddingRight = '';
    body.classList.remove('modal-open');
    html.style.overflowY = '';
  }
}