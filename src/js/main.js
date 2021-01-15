
(() => {
  'use strict'

  const switcherMode = document.getElementById( 'switcher-mode' );
  const htmlClasses = document.querySelector( 'html' ).classList;
  const textMode = document.querySelector( '.phrase' );

  const enableDarkMode = () => {
    sessionStorage.setItem( 'theme', 'dark' );
    htmlClasses.add( 'dark' );
    textMode.textContent = 'light';
    switcherMode.setAttribute( 'aria-checked', true );
  }

  const disableDarkMode = () => {
    sessionStorage.setItem( 'theme', 'light' );
    htmlClasses.remove( 'dark' );
    textMode.textContent = 'dark';
    switcherMode.setAttribute( 'aria-checked', false );
  }

  const checkDarkMode = () => {
    const theme = sessionStorage.getItem( 'theme' );
      if ( theme ) {
        theme === 'dark' ? enableDarkMode() : disableDarkMode();
        return;
      }
    const prefersDarkMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;

    prefersDarkMode ? enableDarkMode() : disableDarkMode();
  }

  checkDarkMode();

  const toggleButton = () => {
    const theme = sessionStorage.getItem( 'theme' );
    theme === 'light' ? enableDarkMode() : disableDarkMode();
  }

  switcherMode.addEventListener( 'click', toggleButton );

})();