/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors:{
        'paleta':{
          100:"#96df9d",
          200:"#6ed478",
          300:"#2f9c3a",
        },
      }
    },
  },
  plugins: [],
}
