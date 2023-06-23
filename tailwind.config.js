/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("./tailwind.typography.js")],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
      },
    },
    fontFamily: {
      sans: "var(--font-Nunito), sans-serif",
      display: "var(--font-Abril_Fatface), display",
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
      spacing: {
        15: "3.75rem", // 60px
        23: "5.625rem", // 90px
      },
      fontSize: {
        "6.25xl": "4rem", // 64px
      },
      maxWidth: {
        "xs-2": "22.5rem", // 360px
        "8xl": "90rem", // 1440px
      },
      boxShadow: {
        default: "2px 2px 25px rgba(0, 0, 0, 0.1)",
        overlay: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
