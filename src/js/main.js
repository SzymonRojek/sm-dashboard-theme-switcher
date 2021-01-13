
  const switcherMode = document.getElementById( 'switcher-mode' );
  const htmlClasses = document.querySelector( 'html' ).classList;
  const textMode = document.querySelector( '.phrase' );
  // let darkMode = localStorage.getItem('theme');
  // console.log(darkMode);

  localStorage.clear()

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
    localStorage.setItem( 'theme', null);
    // localStorage.removeItem( 'theme' );
    // localStorage.clear()
  }

  if ((window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    switchOnDark();
  } else {
    switchOffDark();
  } 

const toggleButton = () => {
    if( localStorage.getItem('theme') !== 'dark') {
      switchOnDark();
    } else {
      switchOffDark();
    }
    console.log(localStorage);
}

switcherMode.addEventListener( 'click', toggleButton);

  // function reload() {
  //   if(localStorage.getItem('theme') !== 'dark') {
  //     switchOffDark();
  //   } else {
  //     switchOnDark();
  //   } 
  // }
  
  // reload();


// (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))