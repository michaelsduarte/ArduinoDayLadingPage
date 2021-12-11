const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#1D3052',
      gray: colors.blueGray,
      teal: colors.teal,
      orange: colors.orange,
      white: colors.white,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
