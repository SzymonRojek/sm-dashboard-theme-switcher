module.exports = {
  content: ['./src/**/*.html'],
  darkMode: 'class', // 'media' or true
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
       },
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          white: {
            lilac: '#F1F3FA',
            zircon: '#F7F9FF',
            clean: '#FFFFFF',
          },
          gray: {
            alto: '#D8D8D8'
          },
          blue: {
            bell: '#8C98C6',
            dodgerLight: '#1DA1F2',
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
      },
      letterSpacing: {
        large: '0.31rem',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       },
    }
  }
}


