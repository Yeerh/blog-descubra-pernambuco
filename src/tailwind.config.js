/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A0CA6A',
        secondary: '#0212EA',
        accent: '#F7E112',
        danger: '#BD2727',
        emerald: '#10B981',
        amber: '#F59E0B',
        heading: '#334155',
        background: '#BBA490',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // ← fonte global
      },
    },
  },
  plugins: [],
}
