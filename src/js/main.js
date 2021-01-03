// main.js file


let darkMode = localStorage.getItem('bcolor');

const darkModeToggle = document.querySelector('#dark-mode-toggle');
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

// check the mode when the page is reload
if (darkMode === 'enabledDark') {
  enableDarkMode();

  textMode.textContent = 'dark';
}  else {
  disableDarkMode();

  textMode.textContent = 'light';
}

darkModeToggle.addEventListener('click', () => {
 
  darkMode = localStorage.getItem('bcolor');
    if (darkMode !== 'enabledDark') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
})




// const switcher = document.getElementById('#dark-mode-toggle');
// const textMode = document.getElementById('phrase');

// switcher.addEventListener('click', function() {
//   let htmlClasses = document.querySelector('html').classList;

//     if(localStorage.theme === 'dark') {
//       htmlClasses.remove('dark');
//       localStorage.removeItem('theme');
//       // textMode.textContent = 'light';
//     } else {
//       htmlClasses.add('dark'); 
//       localStorage.theme = 'dark';
//       // textMode.textContent = 'dark';
//     }
// });