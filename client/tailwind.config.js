module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Zomato: 
        {
          50: '#ffe6e8',
          100: '#fababf',
          200: '#f18e96',
          300: '#ea626d',
          400: '#e33644',
          500: '#c91d2a',
          600: '#9d1520',
          700: '#710d17',
          800: '#45060c',
          900: '#1d0003',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
