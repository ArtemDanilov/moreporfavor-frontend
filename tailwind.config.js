/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-Nunito)", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-Abril_Fatface)", "display"],
    },
    extend: {
      colors: {
        green: "#006C61",
        orange: "#FF8B5C",
        mocha: "#B4AA99",

        "gray-100": "#F8F8F8",
        "gray-200": "#D7D7D7",
        "gray-300": "#5B5B5B",
        "gray-400": "#494949",
      },
      boxShadow: {
        default: "2px 2px 25px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
