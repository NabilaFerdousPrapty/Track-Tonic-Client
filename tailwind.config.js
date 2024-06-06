/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: { 
        "manrope" :["Manrope", "sans-serif"],
        'merriweather': ["Merriweather", 'serif']
    } 
    },
    
  },
  plugins: [
    flowbite.plugin(),
  ],
}

