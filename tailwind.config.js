/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'desaturated-cyan': '#5FB4A2',
      devjobs: '#5964E0',
      audiophile: '#D87D4A',
      feedback: '#AD1FEA',
      invoice: '#7C5DFA',
      'dark-blue': '#203A4C',
      'dark-dark': '#222',
      'grayish-dark-blue': ' #33323D',
      'very-light-grey': '#FAFAFA',
      'light-grey': '#EAEAEB',
      'bright-red': '#F43030',
      Peach: '#F49F85',
      'body-bg': 'rgb(227, 224, 247)',
    },
    fontFamily: {
      jost: 'Jost, sans-serif',
      poppins: 'Poppins, sans-serif',
    },
    fontSize: {
      'body-1': ['16px', { lineHeight: '30px' }],
      'body-2': ['15px', { lineHeight: '30px' }],
      'body-3': ['12px', { lineHeight: '14px', letterSpacing: '2px' }],
      'heading-1': ['50px', { lineHeight: '50px', letterSpacing: '-.0.36' }],
      'heading-2': ['40px', { lineHeight: '42px', letterSpacing: '-.0.36' }],
      'heading-3': ['32px', { lineHeight: '36px', letterSpacing: '-.0.29' }],
    },
    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      width: {
        200: '200px',
        400: '400px',
      },
      height: {
        'two-px': '2px',
        186: '186px',
        200: '200px',
      },
    },
  },
  plugins: [],
};
