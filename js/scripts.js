let darkMode=localStorage.getItem("bcolor");const darkModeToggle=document.querySelector("#dark-mode-toggle"),htmlClasses=document.querySelector("html").classList,textMode=document.getElementById("phrase"),enableDarkMode=()=>{htmlClasses.add("dark"),localStorage.setItem("bcolor","enabledDark"),textMode.textContent="dark"},disableDarkMode=()=>{htmlClasses.remove("dark"),localStorage.setItem("bcolor",null),textMode.textContent="light"};"enabledDark"===darkMode?(enableDarkMode(),textMode.textContent="dark"):(disableDarkMode(),textMode.textContent="light"),darkModeToggle.addEventListener("click",()=>{darkMode=localStorage.getItem("bcolor"),("enabledDark"!==darkMode?enableDarkMode:disableDarkMode)()}),require("remove-focus-outline");