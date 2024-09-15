/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(225deg, #005398 0%, #00A7F7 100%)',
          'bg1': 'linear-gradient(225deg, #29272E%200%,%20#27272E%20100%)',
        },
        borderGradient: {
          'gradient': 'linear-gradient(225deg, #005398 0%, #00A7F7 100%)', 
        },
      },
  },
  plugins: [],
}