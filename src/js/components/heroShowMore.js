

const heroShowMore = () => {
  const openMoreBtn = document.querySelector('[data-more-info-open]');
  const boxMore = document.querySelector('[data-target-more-info]');



  openMoreBtn.addEventListener('click', () => {
    boxMore.classList.toggle('show');
    openMoreBtn.classList.toggle('show');
  });

};

export default heroShowMore;