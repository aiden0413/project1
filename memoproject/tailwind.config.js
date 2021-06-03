module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      '600px': '600px',
    },
    width: {
      '200px': '200px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
