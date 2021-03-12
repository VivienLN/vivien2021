module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'lg': '1140px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}