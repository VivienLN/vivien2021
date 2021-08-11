const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        breath: {
          '0%': { transform: 'scale(0.98)', opacity: '1' },
          '100%': { transform: 'scale(1.04)', opacity: '0.8' }
        }
      },
      animation: {
        breath: 'breath 1s ease-in-out infinite alternate'
      }
    },
    screens: {
      'sm': '520px',
      'md': '768px',
      'lg': '1200px',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    fontSize: {
      'sm': '.9rem',
      'base': '1rem',
      'xl': '1.2rem',
      '2xl': '1.8rem',
      '3xl': '2.5rem',
      '4xl': '4rem'
    },
    fontWeight: {
      'normal': 400,
      'extrabold': 800
    },
    lineHeight: {
      'tight': 1.2,
      'normal': 1.3,
      'relaxed': 1.5
    },
    colors: {
      base: '#fff',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      gray: {
        DEFAULT: '#666',
        dark: '#666',
        darker: '#222',
        darkest: '#091011'
      },
      primary: {
        DEFAULT: '#ffe200',
        dark: '#f5ce00',
        darker: '#e7c300'
      },
      secondary: {
        DEFAULT: '#4bd2ef',
        light: '#a9f4ff',
        dark: '#00688f',
        darker: '#141e27',
        faded: '#5db1dc'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ addUtilities, theme }) {
      // Fat shadow
      let baseSelector = '.fat-shadow-'
      let baseRuleValue = '.058em .077em 0 '
      let utilities = {}
      Object.keys(theme('colors')).map(colorName => {
        let colorValue = theme('colors')[colorName]

        if(typeof colorValue === "object") {
          Object.keys(colorValue).map(colorVariantName => {
            let selector = baseSelector + colorName
            if(colorVariantName != 'DEFAULT') {
              selector += '-' + colorVariantName
            }
            let colorVariantValue = colorValue[colorVariantName]
            utilities[selector] = {textShadow: (baseRuleValue + colorVariantValue)}
          })
        } else {
          utilities[baseSelector + colorName] = {textShadow: (baseRuleValue + colorValue)}
        }
      })

      addUtilities(utilities)
    })
  ],
}