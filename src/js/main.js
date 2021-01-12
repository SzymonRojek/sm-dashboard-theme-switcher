const switcherMode = document.getElementById( 'switcher-mode' );
const htmlClasses = document.querySelector( 'html' ).classList;
const textMode = document.querySelector( '.phrase' );

function switchOn() {
  htmlClasses.add( 'dark' );
  switcherMode.setAttribute( 'aria-checked', true );
  textMode.textContent = 'light';
  localStorage.setItem( 'theme', 'dark' );
}

function switchOff() {
  htmlClasses.remove( 'dark' );
  switcherMode.setAttribute( 'aria-checked', false );
  textMode.textContent = 'dark';
  localStorage.removeItem( 'theme' );
}

function setPreferentialTheme() {
  if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
    switchOn();
  } else {
    switchOff();
  }
}

const toggleButton = element => {
    if( localStorage.getItem( 'theme' ) === 'dark') {
      switchOff();
    } else {
      switchOn();
    }
}

switcherMode.addEventListener( 'click', ( event ) => {
  toggleButton( event.target );
}, false)


// reload the page
  if (localStorage.getItem( 'theme' ) === 'dark') {
    switchOn()
  } else {
   switchOff()
  }

