const heroShowMore = () => {
  const openMoreBtn = document.querySelector('[data-more-info-open]');
  const boxMore = document.querySelector('[data-target-more-info]');

  if (openMoreBtn && boxMore) {
    openMoreBtn.addEventListener('click', () => {
      boxMore.classList.toggle('show');
      openMoreBtn.classList.toggle('show');
    });
  }


};
const handleHeroRating = () => {
  const ratingContainer = document.querySelector('[data-hero-rating]');
  const ratingVoted = document.querySelector('[data-hero-rating-voted]');
  let hasVoted = false;

  if (ratingContainer && ratingVoted) {
    ratingContainer.addEventListener('click', (event) => {
      if (event.target.tagName === 'INPUT' && !hasVoted) {
        ratingVoted.textContent = parseInt(ratingVoted.textContent) + 1;
        hasVoted = true;
      }
    });
  }
};

export { heroShowMore, handleHeroRating };