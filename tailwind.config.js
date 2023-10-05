/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("./tailwind.typography.js")],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
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
    colors: {
      white: "#ffffff",
      black: "#000000",
      green: "#006C61",
      orange: "#FF8B5C",
      mocha: "#B4AA99",

      "gray-100": "#F8F8F8",
      "gray-200": "#D7D7D7",
      "gray-300": "#5B5B5B",
      "gray-400": "#494949",
    },
    extend: {
      spacing: {
        15: "3.75rem", // 60px
        18: "5.5rem", // 72px
        23: "5.625rem", // 90px
        55: "13.75rem", // 220px
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
        small: "0px 5px 20px rgba(0, 0, 0, 0.05)",
        overlay: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
