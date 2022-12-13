/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Montserrat"],
      },
    },
    colors: {
      primary: "#A51818",
      light: "#FFFFFF",
      dark: "#1A1A1A",
    },
  },
  plugins: [],
};
