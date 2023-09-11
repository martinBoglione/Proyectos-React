/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo-aside': '#FAFBFD',
        'dev': '#F7542E',
        'challenges.io': '#090F31',
        'navegacion': '#9E9E9E',
      },
    },
  },
  plugins: [],
}