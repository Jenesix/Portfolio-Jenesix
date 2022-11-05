/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      F1: ["Abyssinica SIL", "serif"],
      F2: ['IBM Plex Sans Thai Looped', "sans-serif"],
      F3: ['Inter Tight', "sans-serif"],
      F4: ['Playfair Display', 'serif'],
      F5: ['Sarabun', 'sans-serif'],
      F6: ['Roboto Slab', 'serif']
    },
    color: {
      gray: {
        50: "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#808080",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#313131",
      },
    },
  },
  plugins: [],
}