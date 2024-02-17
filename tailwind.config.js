/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: "#fca311",
        // primary: "#219ebc",
        primary: "#219ebc",
        darkPrimary: "#023047",
        lightPrimary: "#d1eefc",
        lightSecondary: "#ffb703",
        light: "#F3F4F6",
        dark: "#023047",
        textLight: colors.gray,
      },
    },
  },
  plugins: [],
};
