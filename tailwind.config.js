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
      outline: {
        navyDark: '1px solid #20222F',
        zircon: '2px dotted #F7F9FF',
      },
      triangles: { // defaults to {}
      'left': {
        direction: 'left',      // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
        size: '1em',            // defaults to defaultSize
        height: '0.5em',        // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
        color: '#F7F9FF',  // defaults to defaultColor
        },
      },
    }
  },
  variants: {
    triangles: ['responsive'], // defaults to []
  },
}


