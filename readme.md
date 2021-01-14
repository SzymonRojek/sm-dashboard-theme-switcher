# Social Media Dasboard & theme switcher

## 🎥  Preview site [here](https://szymonrojek.github.io/sm-dashboard-theme-switcher/)

**Technologies used:**
* [x] Gulp
* [x] Tailwindcss
* [x] HTML, CSS, JS

## **For this project I've used:
- Semantic tags and attributes;
- Invisible content for Screen Reader users;
- Flexbox;
- RWD, mobile first;

**Main goals:**
- detect if the user has requested the mode: light or dark; (prefers-color-scheme);
- manually switching the mode between light/dark (smooth transition);
- when the page has been reloaded manually chosen mode has to stay the same;
- use the **sessionStorage** (when the session is finished then as a default will be theme chosen by the user in the "system preferences")

**Conclusion:**
This is my first project with the Tailwindcss framework. I have enjoyed so I would like to expand my knowledge in this area.

Instead of the toggle, I have used the button because I wanted to apply a different design pattern. The button changes the state (aria-checked) so the mode can be reverted too. It was a good experience for me and now as a toggle, it is better to use the radio button because of express explicit state or even the checkbox, but button could be used as a last resort. 

The challenge comes from the website [Frontendmentor.io](https://www.frontendmentor.io/dashboard).

## Usage:

1. Install Dev Depedencies
```
npm install
```
2. To start development and server for live preview
```
npm run dev
```
3. To generate minifed files for production server
```
npm run prod 
```