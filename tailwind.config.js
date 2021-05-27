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
      'lg': '980px',
    },
    fontFamily: {
      'sans': ['Overpass', 'sans-serif']
    },
    fontSize: {
      'sm': '1rem',
      'base': '1.125rem',
      'xl': '1.375rem',
      '2xl': '2rem',
      '3xl': '3.25rem'
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
      base: '#000',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      primary: {
        DEFAULT: '#ffe200',
        dark: '#f5ce00',
        darker: '#e7c300'
      },
      secondary: {
        DEFAULT: '#95ecff',
        dark: '#2d3751',
        faded: '#5db1dc'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}