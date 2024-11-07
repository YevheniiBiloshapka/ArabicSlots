function showDetail(card) {
  const detailBtn = card.querySelector('[data-toggle-details]');
  if (detailBtn) {
    detailBtn.addEventListener('click', () => {
      card.classList.toggle('show');
    });
  }

}

// id каждой кнопке like
function assignUniqueIdToLikeButton(card) {
  const btnLike = card.querySelector('[data-toggle-liked]');
  if (btnLike) {
    const input = btnLike.querySelector('input');
    const label = btnLike.querySelector('label');
    const uniqueId = `like-${Math.random().toString(36).substr(2, 9)}`;
    input.id = uniqueId;
    label.setAttribute('for', uniqueId);
  }

}

const casinoCards = () => {
  const casinoCards = document.querySelectorAll('.casino-card');
  if (casinoCards) {
    casinoCards.forEach((card) => {

      showDetail(card);
      assignUniqueIdToLikeButton(card);
    });
  }
};

export default casinoCards;