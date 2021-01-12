
(() => {
  'use strict'

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
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }
  setPreferentialTheme();

  const toggleButton = () => {
      if( localStorage.getItem( 'theme' ) === 'dark') {
        switchOff();
      } else {
        switchOn();
      }
  }

  switcherMode.addEventListener( 'click', ( event ) => {
    toggleButton( event.target );
  }, false)


// keep the choosen theme when the page has been reloaded:
  if (localStorage.getItem( 'theme' ) === 'dark') {
    switchOn();
  } else {
   switchOff();
  }

})();



// On page load or when changing themes, best to add inline in `head` to avoid FOUC

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.querySelector('html').classList.add('dark')
// } else {
//   document.querySelector('html').classList.remove('dark')
// }

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
