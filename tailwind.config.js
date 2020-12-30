module.exports = {
  content: ['./src/**/*.html'],
  darkMode: 'class', // 'media' or true
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          white: {
            lilac: '#F1F3FA',
            zircon: '#F7F9FF',
          },
          gray: {
            alto: '#D8D8D8'
          },
          blue: {
            bell: '#8C98C6',
            odgerLight: '#1DA1F2',
            dodgerDark: '#178FF5',
          },
          navyDark: {
            primary: '#20222F',
            secondary: '#252B42',
          },
          green: {
            mountainMeadow: '#1EB589',
          },
          red: {
            monza: '#C4032B',
            valencia: '#DC414C',
          },
      }
    }
  }
}
