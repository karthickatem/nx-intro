/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: ['apps/site/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
