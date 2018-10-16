const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 100px

function shadow(e) {
  // Same as width = hero.offsetWidth and height = hero.offsetHeight
  const { offsetWidth: width, offsetheight: height } = hero; 
  // Same as x = e.offsetX and y = e.offsetY
  let { offsetX: x, offsetY: y } = e; 

  // To prevent x and y from resetting if mouse over the h1 element
  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / width * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
    


}

hero.addEventListener('mousemove', shadow);