const aboutMeItems = document.querySelectorAll('.about-me__subtitle p');

aboutMeItems.forEach((item) => {
  animateText(item);
});

function animateText(elem) {
  const text = elem.innerText;

  elem.innerText = '';

  const splitedText = text.split('');

  window.addEventListener('scroll', function () {
    const aboutMe = document.querySelectorAll('.about-me')[0].getBoundingClientRect().top;

    if (aboutMe <= 300) {
      if (elem.classList.length == 0) {
        elem.classList.add('active');
        splitedText.forEach((letter, i) => {
          setTimeout(() => {
            if (letter == ' ') {
              elem.innerHTML = elem.innerHTML + ' ';
            } else {
              elem.innerHTML = elem.innerHTML + letter;
            }

          }, i * 50);
        });
      }
    }
  });
}
