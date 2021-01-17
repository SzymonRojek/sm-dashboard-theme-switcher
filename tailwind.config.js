module.exports = {
  content: ['./src/**/*.html'],
  darkMode: 'class', // 'media' or true
  theme: {

    boxShadow: {
      // new: '11px 21px 44px -3px rgba(0,0,0,0.71)',
      new1: '0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff',
      new2: '6px 8px 8px rgba(0,0,0,0.2), inset 0 10px 20px #b6f9ff',
    },
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
            nobel: '#b0a7a7',
            alto: '#D8D8D8',
            athens: '#e1e2ea',
          },
          blue: {
            bell: '#8C98C6',
            dodgerLight: '#1DA1F2',
            dodgerDark: '#178FF5',
          },
          navyDark: {
            primary: '#20222F',
            secondary: '#252B42',
            tertiary: '#374062',
            fifth: '#5a627f',
          },
          green: {
            mountainMeadow: '#1EB589',
          },
          red: {
            monza: '#C4032B',
            valencia: '#DC414C',
            apricot: '#EF8C85',
          },
      },
      letterSpacing: {
        large: '0.31rem',
      },
      fontFamily: {
        inter: ['Inter'],
        yeonSung: ['"Yeon Sung"'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       },
      outline: {
        navyDark: '1px solid #20222F',
        zircon: '2px dotted #F7F9FF',
      },
    }
  },
  variants: {
    extend:   {
      backgroundColor: ['active'],
    }
  },
}


