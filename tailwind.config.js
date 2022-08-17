/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#444444"
    },
    extend: {}
  },
  plugins: []
}