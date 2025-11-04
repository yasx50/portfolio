/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        successGreen: '#43F043',
      },
      keyframes: {
        'bottom-to-top': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'techmarquee': 'techmarquee 15s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
        'bottom-to-top': 'bottom-to-top 1s ease-out forwards',
      },
      fontFamily: {
        dela: ['"Luckiest Guy"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
