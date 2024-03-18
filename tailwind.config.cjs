/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue"],
      },
      fontWeight: {
        epilogue: {
          400: "400",
          600: "600",
        },
      },
    },
  },
  plugins: [],
};

