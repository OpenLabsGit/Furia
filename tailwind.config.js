/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      // Définissez vos couleurs personnalisées ici
      primary: "#0a28e6",
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

