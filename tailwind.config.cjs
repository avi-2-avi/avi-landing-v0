/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        encode: ["Encode Sans Expanded", "sans-serif"] 
      }
    },
  },
  plugins: [],
}
