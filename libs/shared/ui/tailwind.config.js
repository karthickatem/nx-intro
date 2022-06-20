/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('../../../tailwind-workspace-preset.js')],
  content: ['libs/shared/ui/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
