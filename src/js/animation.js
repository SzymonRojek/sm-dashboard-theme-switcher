const duration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( duration / frameDuration );
const easeOutQuad = t => t * ( 2 - t );

const animateUpdateFollowers = el => {
  let frame = 0;
  const countTo = parseInt( el.innerHTML, 10 );
  
  const counter = setInterval( () => {
    frame++;
    const progress = easeOutQuad( frame / totalFrames );
    const currentCount = Math.round( countTo * progress );

    if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
      el.innerHTML = currentCount;
    }

    if ( frame === totalFrames ) {
      clearInterval( counter );
    }
  }, frameDuration );
};

const updateFollowers = () => {
  const updatedFollowersNum = document.querySelectorAll( '.heading-num' );
  updatedFollowersNum.forEach( animateUpdateFollowers );
};

updateFollowers();