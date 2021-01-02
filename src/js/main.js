//main.js file

const switcher = document.getElementById('switchTheme');
const changeTextMode = document.getElementById('phrase');

switcher.addEventListener('click', function() {
  let htmlClasses = document.querySelector('html').classList;

    if(localStorage.theme === 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme');
      changeTextMode.textContent = 'dark';
    } else {
      htmlClasses.add('dark'); 
      localStorage.theme = 'dark';
      changeTextMode.textContent = 'light';
    }
});




// changeTextMode.addEventListener('load', function() {
//   if(localStorage.theme === 'dark') {
//     changeTextMode.textContent = 'dark';
//   } else {
//     changeTextMode.textContent = 'light';
//   }
//   changeTextMode.removeEventListener('load', load);
// })