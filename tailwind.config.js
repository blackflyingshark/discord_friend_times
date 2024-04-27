/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#20232a",
          DEFAULT: "#282c34",
          light: "#3e4148",
          lighter: "#53565d",
        },
        secondary: "",
      },
    },
  },
  plugins: [],
};
