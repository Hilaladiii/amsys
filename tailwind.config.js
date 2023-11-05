/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tBlue: "#2984E4"
      },
    },
  },
  plugins: [require("daisyui"), require('tailwindcss-animated')],
  daisyui: {
    darkTheme: "light",
  },
}

