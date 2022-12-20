module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#dbbb89',
      },
      backgroundImage: {
        'my': "url('../public/images/my.jpg')",
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#382121',
      shine: '#ddbd8d',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
