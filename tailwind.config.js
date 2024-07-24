/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "2xl": "1400px",
      "sm-2": "581px",
      "md-2": "1100px",
      "xm-2": "500px",
      "sm": "576px",
      "md": "960px",
      "lg": "1440px",
    },
  },
  plugins: [],
}