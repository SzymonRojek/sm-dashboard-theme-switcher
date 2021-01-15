
(() => {

  'use strict'

  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round( duration / frameDuration );
  const easeOutQuad = t => t * ( 2 - t );

  const animateUpdateFollowers = el => {
    let frame = 0;
    const countTo = parseInt( el.textContent, 10 );

    const counter = setInterval( () => {
      frame++;
      const progress = easeOutQuad( frame / totalFrames );
      const currentCount = Math.round( countTo * progress );

      if ( countTo !== currentCount ) {
        el.textContent = currentCount;
      }
      if ( frame === totalFrames ) {
        clearInterval( counter );
      }
    
    }, frameDuration );
  };

  const totalFollowers = document.querySelectorAll( '.count-followers' );

  const updateFollowers = () => totalFollowers.forEach( animateUpdateFollowers );

  updateFollowers();

})();