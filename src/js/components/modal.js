import controlBodyScroll from './bodyScrollControl.js';

const initModal = () => {
  const openModalBtns = document.querySelectorAll('[data-modal-open]');

  openModalBtns.forEach((btn) => {
    const modalId = btn.getAttribute('data-modal-id');
    const modal = document.querySelector(`[data-modal][data-modal-id="${modalId}"]`);
    const closeBtn = document.querySelector(`[data-modal-close][data-modal-id="${modalId}"]`);

    if (modal) {
      btn.addEventListener('click', () => toggleModal(modal));
      closeBtn.addEventListener('click', () => toggleModal(modal));
      modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-overlay')) {
          toggleModal(modal);
        }
      });
    }
  });

  function toggleModal(modal) {
    modal.classList.toggle('show');
    const isHiddenWrapper = modal.classList.contains('show');
    controlBodyScroll(isHiddenWrapper);
  }
};

export default initModal;
