/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          'custom-text-bg':'#718096',
          'custom-bg': '#E4F0F8',
          'custom-blue': '#5382A1',
          'custom-gradiant-border':'linear-gradient(225deg, #005398 0%, #00A7F7 100%)',
        },
        backgroundImage: {
          'custom-gradient': 'linear-gradient(225deg, #005398 0%, #00A7F7 100%)',
          'custom-gradient-btn': 'linear-gradient(225deg, #FFC656 0%, #F16063 100%)',
          'custom-gradient-c6': 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
          'custom-gradient-c5': 'linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)',
          'custom-gradient-c4': 'linear-gradient(225deg, #67E9F1 0%, #24E795 100%)',
          'custom-gradient-c3': 'linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)',
          'custom-gradient-c2': 'linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)',
          'custom-gradient-c1': 'linear-gradient(225deg, #29272E 0%, #27272E 100%)',
          'custom-gradient-text': 'linear-gradient(225deg, #005398 100%, #00A7F7 100%)',
        },
      },
  },
  plugins: [],
}