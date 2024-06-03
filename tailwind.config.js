/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.1)' },
          '75%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        zoom: 'zoom 10s ease-in infinite',
      },
    },
  },
  plugins: [],
}

