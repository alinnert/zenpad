const plugin = require('tailwindcss/plugin.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.ts'],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => {
      addVariant('is-active', '&.is-active')
    }),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        fontFeatures: (value) => ({
          fontFeatureSettings: value
            .split(',')
            .map((setting) => `"${setting}"`)
            .join(','),
        }),
      })
    }),
  ],
}
