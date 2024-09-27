/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          'custom-bg': '#E4F0F8',
          'custom-blue': '#5382A1',
          'custom-gradiant-border':'linear-gradient(225deg, #005398 0%, #00A7F7 100%)',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(225deg, #005398 0%, #00A7F7 100%)',
          'custom-gradient-btn': 'linear-gradient(225deg, #FFC656 0%, #F16063 100%)',

        },
      },
  },
  plugins: [],
}