const config = require('@repo/tailwind-config/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.tsx'],
  ...config,
}
