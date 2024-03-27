const colors = require('tailwindcss/colors')


module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        blue: colors.blue
      },
      fontFamily: {
        'kanit':['Kanit']
        // 'sans': ['ui-sans-serif', 'system-ui', ...],
        // 'serif': ['ui-serif', 'Georgia', ...],
        // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
