const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'animated-components': "url('./src/assets/AnimatedComponents.svg')",
      }
    },
    colors: {
      primary: '#00878F',
      secondary: '#E47128',
      primaryLight: '#62AEB2',
      newBlack: '#1C1E1F',
      accent: '#E5AD24',
      gray: colors.slate,
      teal: colors.teal,
      orange: colors.orange,
      white: colors.white,
      black: colors.black
    }
  },
  plugins: [],
}
