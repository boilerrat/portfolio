/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'courier-prime': ['Courier Prime', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'floatDelayed 15s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, 10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        floatDelayed: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}