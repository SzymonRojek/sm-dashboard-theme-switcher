(()=>{"use strict";const e=document.getElementById("switcher-mode"),t=document.querySelector("html").classList,r=document.querySelector(".phrase");function a(){t.add("dark"),e.setAttribute("aria-checked",!0),r.textContent="light",localStorage.setItem("theme","dark")}function c(){t.remove("dark"),e.setAttribute("aria-checked",!1),r.textContent="dark",localStorage.removeItem("theme")}e.addEventListener("click",e=>{e.target,("dark"===localStorage.getItem("theme")?c:a)()},!1),("dark"===localStorage.getItem("theme")?a:c)()})();