module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      'screen': '100vh',
      '300px': '300px',
      '500px': '500px',
      '56px': '56px',
      '330px': '330px',
    },
    width: {
      '200px': '200px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
