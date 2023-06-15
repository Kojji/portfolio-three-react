/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cherryBlossom':{
          'light': '#f9dce2',
          DEFAULT: '#f2adbc',
          'dark': '#d68596'
        },
        'celadon':{
          'light': '#dcf2cf',
          DEFAULT: '#bce6a2',
          'dark': '#a2dd7e'
        }
      }
    },
  },
  plugins: [],
}
