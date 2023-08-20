const openPopup = document.querySelectorAll('.stack__elem');

openPopup.forEach((button) => {
  button.addEventListener('click', (e) => {
    const popup = button.querySelector('.popup-wrapper');
    popup.classList.add('visible');
    document.body.classList.add('overflow-hidden');
    e.stopPropagation();
  });
});

const closeButtons = document.querySelectorAll('.close-popup');

const wrappers = document.querySelectorAll('.popup-wrapper');

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (e) => {
    wrappers.forEach((popup) => {
      popup.classList.remove('visible');
      document.body.classList.remove('overflow-hidden');
    });
    e.stopPropagation();
  });

});

wrappers.forEach((item) => {
  item.addEventListener('click', (e) => {
    item.classList.remove('visible');
    document.body.classList.remove('overflow-hidden');
    e.stopPropagation();
  });
});

const popups = document.querySelectorAll('.stack__elem__popup');

popups.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
