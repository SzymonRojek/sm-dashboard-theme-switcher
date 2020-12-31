//main.js file


const switcher = document.getElementById('switchTheme');
const getPhraseMode = document.getElementById('phrase');

switcher.addEventListener('click', () => {
  let htmlClasses = document.querySelector('html').classList;

    if(localStorage.theme === 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme');
      getPhraseMode.innerHTML = 'dark mode';
    } else {
      htmlClasses.add('dark'); 
      localStorage.theme = 'dark';
      getPhraseMode.innerHTML = 'light mode';
    }
});

