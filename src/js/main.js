

let darkMode = localStorage.getItem('bcolor');
const switcherMode = document.getElementById('switcher-mode');
const htmlClasses = document.querySelector('html').classList;
const textMode = document.getElementById('phrase');


const enableDarkMode = () => {
  htmlClasses.add('dark');

  // element o kluczu bcolor przechować ma wartość enabledDark
  localStorage.setItem('bcolor', 'enabledDark'); 
  textMode.textContent = 'dark';
}

const disableDarkMode = () => {
  htmlClasses.remove('dark');
  
  localStorage.setItem('bcolor', null); 
  textMode.textContent = 'light';
}


switcherMode.addEventListener('click', (e) => {  

  let darkPressed = e.target.getAttribute('aria-pressed') === 'true';
  // e.target.setAttribute('aria-pressed', String(!darkPressed));

  darkMode = localStorage.getItem('bcolor');
  if (darkMode !== 'enabledDark') {
    e.target.setAttribute('aria-pressed', String(darkPressed));
    enableDarkMode();
  } else {
    e.target.setAttribute('aria-pressed', String(!darkPressed));
    disableDarkMode();
  }
});

// check the mode when the page is reload
if (darkMode === 'enabledDark') {
  enableDarkMode();
}  else {
  disableDarkMode();
}