export default function controlBodyScroll(isOpen) {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const scrollbarWidth = window.innerWidth - document.body.offsetWidth + 'px';


  if (isOpen) {
    if (window.innerWidth > 768) {
      body.style.paddingRight = scrollbarWidth;
      header.style.paddingRight = scrollbarWidth;
    }

    let pagePosition = window.scrollY;

    body.classList.add('modal-open');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
  } else {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    body.style.paddingRight = '';
    header.style.paddingRight = '';

    body.style.top = 'auto';
    body.classList.remove('modal-open');
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute('data-position');
  }
}
