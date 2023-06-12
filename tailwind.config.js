/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    boxShadow: {
      light: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    fontFamily: {
      'roboto': ['Roboto'],
      'openSans': ['Open Sans'],
      'montserrat': ['Montserrat']
    },
    extend: {
      colors: {
        'neutral': "#5C5F5C",
        'primary40': "#006D44",
        "primary50": "#005232",
        "primary60": "#0D4D00",
        'customBrown': "#6E5E00",
        'bg-color': "#F2FAF7",
        "primaryLight": "#71B453"
      },
      backgroundImage: {
        'herobg': "url('/src/assets/ellipse-bg.svg')",
        'faqbg': "url('/src/assets/faq.svg')",
        'aboutbg': "url('/src/assets/aboutUsBg.png')",
        'subscribeBg': "url('/src/assets/subscribeBg.png')"
      },
      screens: {
      }
    },
  },
  plugins: [],
};
