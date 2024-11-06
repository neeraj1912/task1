const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spartan', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cyan: {
          lighter: 'hsl(180, 52%, 96%)',
          light: 'hsl(180, 31%, 95%)',
          DEFAULT: 'hsl(180, 29%, 50%)',
          dark: 'hsl(180, 8%, 52%)',
          darkest: 'hsl(180, 14%, 20%)',
        },
      },
      backgroundImage: (theme) => ({
        'header-desktop': "url('/images/bg-header-desktop.svg')",
        'header-mobile': "url('/images/bg-header-mobile.svg')",
      }),
      height: {
        '156px': '156px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
