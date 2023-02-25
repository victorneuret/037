/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      primary: {
        100: "#14b8a6",
        200: "#047857",
        300: "#064e3b",
      },
      neutral: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      disabled: "#94a3b8",
      info: "#38bdf8",
      danger: "#fb923c",
      warning: "#f87171",
      success: "#2dd4bf",
      border: "#475569",
    },
    borderRadius: {
      none: "0px",
      xsmall: "4px",
      small: "8px",
      medium: "16px",
      full: "50px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        ailerons: ["ailerons", "sans-serif"],
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      boxShadow: {
        small: "0rem 1rem 2rem rgba(15, 23, 42, 0.5)",
        medium: "0rem 1rem 2rem rgba(15, 23, 42, 1)",
        inner: "inset 2px 0px 4px 0 rgb(255 255 255 / 0.05)",
        test: "inset 2px 0 12px -4px rgba(255 255 255 / 0.15), inset -2px 0 12px -4px rgba(255 255 255 / 0.15)",
      },
    },
  },
};
