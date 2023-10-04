/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'logoBlue': '#084D84',
      'customGray': '#E7E6E6',
      'lightBlue': '#D8E2F3'
    }
  },
  plugins: [],
}

