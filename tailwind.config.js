/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        navOpen: {
          '0%': {
            transform: 'translateX(-300px)',
            opcity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opcity: 1
          }
        },
        navClose: {
          '0%': {
            transform: 'translateX(0)',
            opcity: 1
          },
          '100%': {
            transform: 'translateX(-300px)',
            opcity: 0
          }
        }
      },
      animation: {
        navOpen: 'navOpen .5s ease-in-out',
        navClose: 'navClose .5s ease-in-out'
      }
    },
  },
  plugins: [],
}

