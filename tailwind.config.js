module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "410px": "410px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
