/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.js', './src/components/*.js'],
  theme: {
    screens: {
      xs: '100px',
      sm: '395px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'pinkishRed': '#ff585D',
        'white': '#ffffff',
        'darkGray': '#484848',
        'lightGray': '#9ca3af'
      },
      fontFamily: {
        'rubik-glitch': ["'Rubik Glitch'", 'cursive'],
        'roboto': ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
