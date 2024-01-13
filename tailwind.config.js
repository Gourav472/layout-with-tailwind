/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[".//**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 1px 10px 0px rgba(0, 0, 0, 0.10)',
        '4xl': '-2px 2px 33px 11px rgba(0, 0, 0, 0.10)',
      },
      fontFamily: {
        'Work-Sans': "'Work Sans', sans-serif",
      }
      
    },
  },
  plugins: [],
}

