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
      primaryColor: "#A51818",
      lightColor: "#FFFFFF",
      darkColor: "#1A1A1A",
    },
  },
  plugins: [],
};
