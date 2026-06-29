/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        valentino: {
          red: '#C41E3A',
          'red-dark': '#9B172D',
          'red-light': '#E83E50',
          dark: '#1A1A2E',
          'dark-light': '#252542',
          gold: '#D4A843',
          'gold-light': '#E8C56D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}