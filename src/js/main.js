
// get mode user's preferences ;
// switch mode manually;
// when the page reloaded choosen mode cannot change;
// when dark mode is one aria-checked => true


let darkMode = localStorage.getItem( 'theme' );
const switcherMode = document.getElementById( 'switcher-mode' );
const htmlClasses = document.querySelector( 'html' ).classList;
const textMode = document.querySelector( '.phrase' );

function checkDarkMode() {
  if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
    return true;
  }
  return false;
}

const enableDarkMode = () => {
  localStorage.setItem( 'theme', 'dark' ); 
  htmlClasses.add( 'dark' );
  textMode.textContent = 'light';
}

const disableDarkMode = () => {

  localStorage.setItem( 'theme', 'light' ); 
  htmlClasses.remove( 'dark' );
  textMode.textContent = 'dark';
}

if ( checkDarkMode() ) {
  enableDarkMode();
} else {
  disableDarkMode();
}


const toggleButton = () => {
  darkMode = localStorage.getItem( 'theme' );

  let pressed = switcherMode.getAttribute( 'aria-checked' ) === 'true';
  switcherMode.setAttribute( 'aria-checked', !pressed );
  
    if( !pressed && darkMode !== 'dark' ) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
}

switcherMode.addEventListener( 'click', toggleButton);