/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'harley-orange': '#FF6B00',
        'harley-black': '#1A1A1A',
        'harley-gray': '#2D2D2D',
        'harley-light': '#F5F5F5',
      },
      fontFamily: {
        'harley': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(45,45,45,0.7) 100%)',
      },
    },
  },
  plugins: [],
}