const switcherMode=document.getElementById("switcher-mode"),htmlClasses=document.querySelector("html").classList,textMode=document.querySelector(".phrase");let checkMode=localStorage.getItem("theme");const switchOnDark=()=>{htmlClasses.add("dark"),switcherMode.setAttribute("aria-checked",!0),textMode.textContent="light",localStorage.setItem("theme","dark")},switchOffDark=()=>{htmlClasses.remove("dark"),switcherMode.setAttribute("aria-checked",!1),textMode.textContent="dark",localStorage.setItem("theme","light")};("dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?switchOnDark:switchOffDark)(),localStorage.clear();const toggleButton=()=>{checkMode=(("dark"!==checkMode?switchOnDark:switchOffDark)(),localStorage.getItem("theme")),console.log(checkMode)};switcherMode.addEventListener("click",toggleButton),console.log(checkMode),document.addEventListener("load",()=>{checkMode,switchOnDark(),localStorage.clear()});