/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: '#1F3BB3',
          dark: '#172d88'
        },
        secondary: {
          DEFAULT: '#F1F1F1',
          dark: '#D8D8D8'
        },
        link: {
          DEFAULT: '#0d6efd',
          hover: '#0a58ca'
        },
        success: {
          DEFAULT: '#34B1AA',
          dark: '#288a84'
        },
        warning: {
          DEFAULT: '#ffaf00',
          dark: '#cc8c00'
        },
        danger: {
          DEFAULT: '#F95F53',
          dark: '#f73122'
        },
        info: {
          DEFAULT: '#52CDFF',
          dark: '#1fbeff'
        },
        'text-color': {
          light: '#8D8D8D',
          menu: '#404040',
          DEFAULT: '#212121',
          bolt: '#1F1F1F',
        },
        'bg-color': '#F4F5F7'
      },

      fontFamily: {
        'sans': ['Manrope', 'sans-serif']
      }

    },
  },
  plugins: [],
}
