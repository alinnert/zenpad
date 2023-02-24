const plugin = require('tailwindcss/plugin.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => {
      addVariant('is-active', '&.is-active')
    }),
  ],
}
