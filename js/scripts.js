let darkMode=localStorage.getItem("bcolor");const switcherMode=document.getElementById("switcher-mode"),htmlClasses=document.querySelector("html").classList,textMode=document.getElementById("phrase"),enableDarkMode=()=>{htmlClasses.add("dark"),localStorage.setItem("bcolor","enabledDark"),textMode.textContent="dark"},disableDarkMode=()=>{htmlClasses.remove("dark"),localStorage.setItem("bcolor",null),textMode.textContent="light"};switcherMode.addEventListener("click",e=>{var t="true"===e.target.getAttribute("aria-pressed");darkMode=localStorage.getItem("bcolor"),"enabledDark"!==darkMode?(e.target.setAttribute("aria-pressed",String(t)),enableDarkMode()):(e.target.setAttribute("aria-pressed",String(!t)),disableDarkMode())}),("enabledDark"===darkMode?enableDarkMode:disableDarkMode)();