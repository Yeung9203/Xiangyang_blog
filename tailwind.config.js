/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1E1E1E",
        accent: "#FF9500",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
                'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
                'star-movement-top': 'star-movement-top linear infinite alternate',
              },
              keyframes: {
                'star-movement-bottom': {
                  '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                  '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
                },
                'star-movement-top': {
                  '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                  '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
                },
              },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '80px',
      }
    },
  },
  plugins: [],
} 