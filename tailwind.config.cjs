/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        steelPink: {
          800: "#832e8a",
          600: "#b24abb",
          100: "dcace1",
        },
        aliceBlue: {
          DEFAULT: "#e8eef2",
        },
        timberwolf: {
          DEFAULT: "#d6c9c9",
        },
      },
    },
  },
  plugins: [],
};
