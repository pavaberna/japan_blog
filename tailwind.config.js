/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFB7C5",
        "secondary": "#FFECEC",
        "szoveg": "#FFF5F5",
      },
      keyframes: {
        slideFromBottomToMiddle: {
          '0%': {
            transform: 'translateY(200%)',
            opacity: 0,
          },
          '25%': {
            transform: 'translateY(-20%)',
            opacity: 25
          },
          '50%': {
            transform: 'translateY(0)',
            opacity: 50,
          },
          '75%': {
            transform: 'translateY(0)',
            opacity: 75,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 100,
          }
        }
      },
      animation: {
        slideFromBottomToMiddle: 'slideFromBottomToMiddle 5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

