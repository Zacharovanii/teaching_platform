/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "480px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
