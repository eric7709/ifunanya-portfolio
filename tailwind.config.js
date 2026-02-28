/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F8D7E3",
        softPink: "#FCEEF3",
        neutralLight: "#F7F7F7",
        neutralSoft: "#EDEDED",
        textDark: "#2A2A2A",
        accent: "#E8AFC4",
      },
      
    },
  },
  plugins: [],
};
