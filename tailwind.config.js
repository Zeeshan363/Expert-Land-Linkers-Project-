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
      boxesColor: "#FFFFFF",
      boxShadow: "#6D7D91",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#D3D3D3",
      darkGray: "#5A5A5A",
    },
    backgroundImage: {
      queries: "url('/Pictures/queriesbg.jpg')",
    },
  },
  plugins: [],
};
