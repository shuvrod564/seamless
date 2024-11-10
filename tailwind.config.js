/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4681FF',
        dark: '#232E51',
        'primary-light': '#5E74B7',
        'gray-bg': '#EEF3F9'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

