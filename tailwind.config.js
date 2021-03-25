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
      'sans': ['"Maven Pro"', 'sans-serif']
    },
    fontSize: {
      'sm': '1rem',
      'base': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.9rem',
      '4xl': '3rem'
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
      base: '#111132',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      primary: {
        DEFAULT: '#ffec00',
        dark: '#fbe307'
      },
      secondary: {
        DEFAULT: '#441abe',
        dark: '#290c6c',
        faded: '#47328a'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}