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
        sliceDown: {
          "0%": { maxHeight: "300px",opacity:"1" },
          "100%": { maxHeight: "0px",opacity:"0" },
        },
        sliceUp: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "300px", opacity: "1" },
        },
        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        hoverFilter:{
          "0%": { Height: "50px", },
          "100%": { Height: "auto",},
        },
        aparecerDeAbajo: {
          "0%": { opacity: "0",transform:"translateY(50%)" },
          "100%": { opacity: "1",transform:"translateY(0%) "},
        },
        desaparecer: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        aparecerCote: {
          "0%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(0%)" },
        },
        desaparecerCote: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        "waving-hand": "abrirCat 2s linear infinite",
        aparecer: "aparecer 1s ease-out ",
        aparecerCostado: "aparecerCote .3s ease-in ",
        desaparecerCostado: "desaparecerCote .3s ease-in ",
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
