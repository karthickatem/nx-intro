const colors = require('tailwindcss/colors');

// Primary color: hsl(164, 93%, 17%)

const primaryPallete = {
  DEFAULT: 'hsl(207, 99%, 32%)',
  25: 'hsl(207, 99%, 98%)',
  50: 'hsl(207, 99%, 90%)',
  100: 'hsl(207, 99%, 80%)',
  200: 'hsl(207, 99%, 70%)',
  300: 'hsl(207, 99%, 60%)',
  400: 'hsl(207, 99%, 50%)',
  500: 'hsl(207, 99%, 32%)',
  600: 'hsl(207, 99%, 24%)',
  700: 'hsl(207, 99%, 16%)',
  800: 'hsl(207, 99%, 08%)',
  900: 'hsl(207, 99%, 04%)',
};

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
};
