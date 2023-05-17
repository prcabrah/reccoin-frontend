
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      DEFAULT: '1.25REM'
    },
    boxShadow: {
      'light': '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    fontSize: {
      'base': "1rem",
    },
    fontFamily: {
      'roboto': ['Roboto']
    },
    extend: {
      colors: {
       'primary40': "#006D44"
      },
      backgroundImage: {
        'herobg': "url('/src/assets/hero-bg.png')"
      },
      screens: {
        
      }
    },
  },
  plugins: [],
}
