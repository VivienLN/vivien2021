module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
      '2xl': '1.9rem',
      '3xl': '3rem'
    },
    fontWeight: {
      'normal': 400,
      'extrabold': 800
    },
    colors: {
      primary: {
        DEFAULT: '#fff602',
        dark: '#fbe307',
      },
      secondary: {
        DEFAULT: '#441abe',
        dark: '#290c6c',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}