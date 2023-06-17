/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js}',  '.src/pages/**/*.{html,js}',  './src/components/**/*.{html,js}',],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      vazir: ['Vazir']
    },
    extend: {
      backgroundImage :{
        'banner-overlay': '90deg, hsl(220, 17%, 7%) 0%, hsla(220, 17%, 7%, 0.5) 100%',
        'bottom-overlay': '180deg, hsla(250, 13%, 11%, 0), hsla(250, 13%, 11%, 1)'
      },
      colors: {
        'app-background': 'hsla(220, 17%, 7%, 1);',
        'banner-background': 'hsla(250, 6%, 20%, 1)',
        'white-alpha-20': 'hsla(0, 0%, 100%, 0.2)',
        'on-background': 'hsla(220, 100%, 95%, 1)',
        'on-surface': 'hsla(250, 100%, 95%, 1)',
        'on-surface-variant': 'hsla(250, 1%, 44%, 1)',
        'primary': 'hsla(349, 100%, 43%, 1)',
        'primary-variant': 'hsla(349, 69%, 51%, 1)',
        'rating-color': 'hsla(44, 100%, 49%, 1)',
        'surface': 'hsla(250, 13%, 11%, 1)',
        'text-color': 'hsla(250, 2%, 59%, 1)',

      },

      gradientColorStops: {
        'banner-overlay': '90deg, hsl(220, 17%, 7%) 0%, hsla(220, 17%, 7%, 0.5) 100%',
        'bottom-overlay': '180deg, hsla(250, 13%, 11%, 0), hsla(250, 13%, 11%, 1)'
      },

      fontSize: {
        'fs-heading': '3rem',
        'fs-title-lg': '2.6rem',
        'fs-title': '2rem',
        'fs-body': '1.8rem',
        'fs-button': '1.5rem',
        'fs-label': '1.4rem'
      },

      boxShadow: {
        'shadow-1': '0 1px 4px hsla(0, 0%, 0%, 0.75)',
        'shadow-2': '0 2px 4px hsla(350, 100%, 43%, 0.3)'
      },

      borderRadius: {
        'radius-4': '4px',
        'radius-8': '8px',
        'radius-16': '16px',
        'radius-24': '24px',
        'radius-36': '36px'
      }
    },
  },
  plugins: [],
}

