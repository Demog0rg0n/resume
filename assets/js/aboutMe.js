const aboutMeText = document.querySelector('.about-me__subtitle__text');

animateText(aboutMeText);

function animateText(elem) {
  const text = elem.innerText;
  console.log(elem)

  elem.innerHTML = '';

  const splitedText = text.split('');
  console.log(splitedText)

  window.addEventListener('scroll', windowScrollHandler);

  function windowScrollHandler() {
    const aboutMe = document.querySelector('.about-me').getBoundingClientRect().top;

    if (aboutMe <= 300) {

      if (elem.classList.length == 1) {
        elem.classList.add('active');

        splitedText.forEach((letter, i) => {
          setTimeout(() => {

            if(letter === "#") {
              elem.innerHTML = elem.innerHTML + "<br>";
            } else {
              elem.innerHTML = elem.innerHTML + letter;
            }

            if(i === splitedText.length - 1) {
              const caret = document.querySelector(".caret")
              caret.classList.add("disabled")
            }

          }, i * 45);
        });

      }

      window.removeEventListener("scroll", windowScrollHandler)
    }
  }
}


