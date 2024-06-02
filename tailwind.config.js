/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primery:"#323232",
        secondary1:"#f0f0f0",
        secondary2:"#BDBDBD",
        textColor:"#2D2D2D",
        accent1:"#1BCF92",
        accent2:"#E55249",
        accent3:"#FFC839"
      },
      fontFamily:{
        "product-sans":['Product Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}