/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3F76BF',
        'light': '#ecf0f3',
        'dark': '#292d32',
      },
      boxShadow: {
        'drop-light': '4px 4px 8px #c9cccf, -4px -4px 8px #fff',
        'drop-dark': '4px 4px 8px #23262b, -4px -4px 8px #2f343a',     
        'inner-light': 'inset 4px 4px 8px #c9cccf, inset -4px -4px 8px #fff',
        'inner-dark': 'inset 4px 4px 8px #23262b, inset -4px -4px 8px #2f343a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
