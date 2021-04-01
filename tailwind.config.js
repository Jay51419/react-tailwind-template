module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	colors: {
      "lighter": 'var(--lighter)',
      "light": 'var(--light)',
      "tertiary": 'var(--tertiary)',
      "secondary": 'var(--secondary)',
      "primary": 'var(--primary)',
      "dark": 'var(--dark)',
      'darker': 'var(--darker)',
      },
      margin: {
        '70': '70px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
