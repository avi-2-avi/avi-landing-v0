/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    daisyui: {
      themes: [
        {
          rosepint: {
          
            "primary": "#c4a7e7",
          
            "secondary": "#ea9a97",
          
            "accent": "#9ccfd8",
          
            "neutral": "#2a273f",
          
            "base-100": "#232136",
          
            "info": "#3e8fb0",
          
            "success": "#36D399",
          
            "warning": "#FBBD23",
          
            "error": "#F87272",
          },
        },
      ],
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        encode: ["Encode Sans Expanded", "sans-serif"] 
      }
    },
  },
  plugins: [require("daisyui")],
}
