const colors=require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'sans':['Barlow']
      },
      colors:{
        greeny:'#20bf55',
        bluey:'#01baef',
        teal:'#C0C7C7',
        aqua:'#08D8E8',
        tealy:'#008080',

        humming:'#D1F2EB',        //v.nice
        riptide:'#01B6AD',
        bermuda:'#01B6AD',
        another:'#86D2C1'

      },
      minHeight: {
        '3':'3rem',
        '24': '24px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}