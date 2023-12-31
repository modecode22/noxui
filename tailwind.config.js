/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7f8ff",
          100: "#d5dbff",
          200: "#b5c0ff",
          300: "#5d75ff",
          400: "#4662ff",
          500: "#304fff",
          600: "#3041ff",
          700: "#2628cc",
          800: "#1c1e99",
          900: "#121465",
          950: "#080931",
        },
        light: {
          50: "#fdfdff",
          100: "#fbfaff",
          200: "#f6f3ff",
          300: "#f1ecff",
          400: "#e6defe",
          500: "#dcd5f3",
          600: "#c2bbd6",
          700: "#c2bbd6",
          800: "#b5aec7",
          900: "#a29cb2",
          950: "#958fa4",
        },
        dark: {
          50: "#958fa4",
          100: "#6a6675",
          200: "#4d4a55",
          300: "#38363e",
          400: "#2e2c35",
          500: "#29282f",
          600: "#242427",
          700: "#232227",
          800: "#232227",
          900: "#19191d",
          950: "#16161a",
        },
        error: {
          50: "#ffeaea",
          100: "#ffd5d5",
          200: "#ffabab",
          300: "#ff8181",
          400: "#ff5757",
          500: "#ff2d2d",
          600: "#cc2424",
          700: "#991b1b",
          800: "#661212",
          900: "#330909",
        },
        alert: {
          50: "#fff5ea",
          100: "#ffead5",
          200: "#ffd5ab",
          300: "#ffc081",
          400: "#ffab57",
          500: "#ff962d",
          600: "#cc7824",
          700: "#995a1b",
          800: "#663c12",
          900: "#331e09",
        },
        success: {
          50: "#F6FCF6",
          100: "#ECF9ED",
          200: "#D0F0D3",
          300: "#B4E7B8",
          400: "#7BD483",
          500: "#43C24E",
          600: "#3CAF46",
          700: "#28742F",
          800: "#1E5723",
          900: "#143A17",
        },
        happy: {
          DEFAULT: "#2dff96",
          50: "#F0FFFB",
          50: "#eafff5",
          100: "#d5ffea",
          200: "#abffd5",
          300: "#81ffc0",
          400: "#57ffab",
          500: "#2dff96",
          600: "#24cc78",
          700: "#1b995a",
          800: "#12663c",
          900: "#09331e",
          950: "#000D0A",
        },
        info: {
          DEFAULT: "#15B2D3",
          50: "#CEF3FA",
          100: "#BCEEF8",
          200: "#97E4F5",
          300: "#71DBF1",
          400: "#4CD1ED",
          500: "#27C8EA",
          600: "#15B2D3",
          700: "#1087A0",
          800: "#0B5C6D",
          900: "#06313A",
          950: "#031B20",
        },
      },
    },
  },
  plugins: [],
};
