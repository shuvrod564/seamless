/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A7AFE',
        dark: '#0F2655',
        secondary: '#C2CCD8',
        'body-bg': '#EEF3F9',
        'primary-light': '#5E74B7',
        'gray-bg': '#EEF3F9',
        'thead-bg': '#D5E3FF'
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

