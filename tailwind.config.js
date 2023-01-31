/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        abrirCat: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        aparecer:{
          "0%":{opacity:"0"},
          "100%":{opacity:"1"},
        }
      },
      animation: {
        "waving-hand": "abrirCat 2s linear infinite",
        "aparecer": "aparecer 1s ease-out ",
      },

      colors: {
        paleta: {
          100: "#96df9d",
          200: "#6ed478",
          300: "#2f9c3a",
        },
      },
    },
  },
  plugins: [],
};
