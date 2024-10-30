
function showDetail(card) {
  const detailBtn =  card.querySelector('[data-toggle-details]')
  detailBtn.addEventListener("click", () => {
    card.classList.toggle('show')
  })
}
function isLiked(card) {
  const likedBtn =  card.querySelector('[data-toggle-liked]')
  likedBtn.addEventListener("click", () => {
    likedBtn.classList.toggle('isLiked')
  })
}


const casinoCards = () => {
  const casinoCards = document.querySelectorAll('.casino-card');
  if (casinoCards){
    casinoCards.forEach((card) => {
      showDetail(card)
      isLiked(card)
    })
  }
};

export default casinoCards