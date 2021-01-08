
let darkMode = localStorage.getItem('theme');
const switcherMode = document.getElementById('switcher-mode');
const htmlClasses = document.querySelector('html').classList;
const textMode = document.querySelector('.phrase');

function checkDarkMode() {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    
  ) {
    return true;
  }
  return false;
}



const enableDarkMode = () => {
  htmlClasses.add('dark');

  // element o kluczu bcolor przechować ma wartość enabledDark
  localStorage.setItem('theme', 'dark-light'); 
  textMode.textContent = 'light';
}

const disableDarkMode = () => {
  htmlClasses.remove('dark');
  localStorage.setItem('theme', null); 
  textMode.textContent = 'dark ';
}

if (checkDarkMode()) {
  enableDarkMode();
} else {
  disableDarkMode();
}


const handleBtnClick = event => {
  toggleButton(event.target);
}

const toggleButton = element => {
  darkMode = localStorage.getItem('theme');

  let pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);
  
    if(!pressed && darkMode !== 'dark-light') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
}

switcherMode.addEventListener('click', ( event ) => {
  handleBtnClick( event );
}, false)



/*
celem główbym jest to, by skrypt rozpoznał preferencje uzytkownia do theme - 
jezeli uzytkownik nie ma nic przeciwko by uzywac dark mode, to ma być ono uznane za docelowe. 
Jednakze ciekawi mnie taka sytuacja: jezeli user w danym momencie wybierze light mode, 
to kolejnym celem jest to, by po odswiezeniu strony owo light mode zostawało,
na pewno mozna taki skrypt napisac. 

aria pressed ma odczytywac status buttona. 
Jezeli przegladrka wybierze glowne theme to aria pressed dla niego bedzie poczatkowo false. 
Dlatego jezeli bedzie dark mode to aria-pressed = false, nacisniecie buttona przypisze true do arii, 
tj. wlaczenie buttona. Teraz istotne jest to, by po odswiezeniu strony aria sie nie zmienila.

ponizej mam dwie nieudane proby napisania funkcji w kontekscie odswiezania strony: 
obie sa do kitu, ale cos z nich moze sie przyda...

*/


// const afterLoadPage = () => {
//   if (darkMode === 'dark-light') {
//     switcherMode.setAttribute("aria-pressed", true);
//     enableDarkMode()
//   }  else {
//     switcherMode.setAttribute("aria-pressed", false);
//     disableDarkMode();
//   }
// }
// afterLoadPage();


// const afterLoadPage = () => {
// if (localStorage.theme === 'dark-light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   enableDarkMode()
// } else {
//   disableDarkMode();
// }

// }
// afterLoadPage();

