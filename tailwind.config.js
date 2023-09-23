/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
        boldFont: ['ClashDisplay-Medium', 'sans'],
      },
      colors: {
        'purple-dark': '#150E28',
        'purple-light': '#903AFF',
        'purple-bright': '#D434FE',
        'purple-lighter': '#FF26B9',
      },
    },
  },
  plugins: [],
}