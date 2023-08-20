window.addEventListener('scroll', function () {
  const skills = document.querySelectorAll('.skills')[0].getBoundingClientRect().top;
  const header = document.querySelector('.header');

  if (skills <= 300) {
    const skillArr = document.querySelectorAll('.stack__elem');

    skillArr.forEach((skill, i) => {
      this.setTimeout(() => {
        skill.classList.add('visible');
      }, i * 400);
    });
  }

  if(document.body.getBoundingClientRect().top != 0) {
    header.classList.add("active")
  } else if(header.classList.length > 1){
    header.classList.remove("active")
  }







});



const header = document.querySelector(".header")

header.addEventListener('touchstart', handleTouchStart, false);
header.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches
}

function handleTouchStart(evt) {
const firstTouch = getTouches(evt)[0];
yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
  if ( ! yDown ) {
    return;
  }

  var yUp = evt.touches[0].clientY;

  var yDiff = yDown - yUp;

  if ( Math.abs( yDiff ) ) { /* отлавливаем разницу в движении */
    if ( yDiff >= 0 ) {
      header.classList.remove("slidedDown")
      header.classList.add("slidedUp")
    } else {
      header.classList.remove("slidedUp")
      header.classList.add("slidedDown")
    }
  }
  /* свайп был, обнуляем координаты */
  yDown = null;
};
