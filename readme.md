# Social Media Dasboard & theme switcher

## 🎥  Preview site [here](https://szymonrojek.github.io/sm-dashboard-theme-switcher/)

**Technologies used:**
* [x] Gulp
* [x] Tailwindcss
* [x] HTML, CSS, JS

## **For this project I've used:
- Semantic tags and attributes;
- Invisible content just for Screen Reader users;
- Flexbox;
- RWD, mobile first;

**Main goals:**
- detect if the user has requested the system use a light or dark color theme (prefers-color-scheme);
- switch manually the mode light/dark (smooth transition);
- do not change the mode when the page has been reloaded;

**Conclusion:**
This is my first project with the tailwindcss framework. I have enjoyed and definitely I would like to expand my knowledge in this area.

Instead of the toggle I have used the button because I wanted to applied a different design pattern and button changes the state (aria-checked) so the mode can be reverted too. After this project I know that as a toggle it is better to use the radio button because of express explicit state or even checkbox, but button could be used as a last resort. 

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