

let darkMode = localStorage.getItem('theme');
const switcherMode = document.getElementById('switcher-mode');
const htmlClasses = document.querySelector('html').classList;
const textMode = document.querySelector('.phrase');

const enableDarkMode = () => {
  htmlClasses.add('dark');

  // element o kluczu bcolor przechować ma wartość enabledDark
  localStorage.setItem('theme', 'dark-light'); 
  textMode.textContent = 'light';
}

const disableDarkMode = () => {
  htmlClasses.remove('dark');
  
  localStorage.setItem('theme', null); 
  textMode.textContent = 'dark';
}


const handleBtnClick = event => {
  toggleButton(event.target);
}

const toggleButton = element => {
  let pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);
  
    if(!pressed && darkMode !== 'dark-light') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
}

switcherMode.addEventListener('click', ( event ) => {
  handleBtnClick(event);
}, false)

const afterLoadPage = () => {
  if (darkMode === 'dark-light') {
    switcherMode.setAttribute("aria-pressed", true);
    enableDarkMode()
  }  else {
    switcherMode.setAttribute("aria-pressed", false);
    disableDarkMode();
  }
}
afterLoadPage();

