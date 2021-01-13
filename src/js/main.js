
  const switcherMode = document.getElementById( 'switcher-mode' );
  const htmlClasses = document.querySelector( 'html' ).classList;
  const textMode = document.querySelector( '.phrase' );
  let checkMode = localStorage.getItem('theme');

  const switchOnDark = () => {
    htmlClasses.add( 'dark' );
    switcherMode.setAttribute( 'aria-checked', true );
    textMode.textContent = 'light';
    localStorage.setItem( 'theme', 'dark' );
  }

  const switchOffDark = () => {
    htmlClasses.remove( 'dark' );
    switcherMode.setAttribute( 'aria-checked', false );
    textMode.textContent = 'dark';
    localStorage.setItem( 'theme', 'light');
  }

 // get user preferences theme:

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window. matchMedia('(prefers-color-scheme: dark)').matches)) {
      switchOnDark(); 
      localStorage.clear();
    } else {
      switchOffDark();
      localStorage.clear();
    }
  
  const toggleButton = () => {
    if( checkMode !== 'dark') {
      switchOnDark();
      checkMode = localStorage.getItem( 'theme' );
      } else {
      switchOffDark();
      checkMode = localStorage.getItem( 'theme' );
    }
    console.log(checkMode);
}

switcherMode.addEventListener( 'click', toggleButton );

console.log(checkMode);

// prevent reloading:

document.addEventListener('load', () => {
  if (checkMode === 'dark') {
    switchOnDark();
    localStorage.clear()
  } else {
    switchOnDark();
    localStorage.clear()
  }
});
