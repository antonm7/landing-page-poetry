/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      raleway:['Raleway'],
      savoye:['Savoye']
    },
    extend: {
      colors: {
        brownFill:'#211D18'
      },
      fontSize:{
        '10xl':'10rem',
        '130xl':'13rem',
        '132xl':'13.5rem'
      }
    },
  },
  plugins: [],
}
