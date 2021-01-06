

let darkMode = localStorage.getItem('bcolor');
const switcherMode = document.getElementById('switcher-mode');
const htmlClasses = document.querySelector('html').classList;
const textMode = document.querySelector('.phrase');

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


function handleBtnClick(event) {
  toggleButton(event.target);
}

function toggleButton(element) {
  let pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);

  darkMode - localStorage.getItem('bcolor');

    if(!pressed && darkMode !== 'enableDark') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
}

switcherMode.addEventListener('click', (event) => {
  handleBtnClick(event);
})

// // check the mode when the page is reload

function afterLoadPage() {
  if (darkMode === 'enabledDark') {
    switcherMode.setAttribute("aria-pressed", true);
    enableDarkMode();
  }  else {
    switcherMode.setAttribute("aria-pressed", false);
    disableDarkMode();
  }
}
afterLoadPage();