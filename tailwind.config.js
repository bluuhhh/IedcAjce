/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#F9F7F7',
          100: '#DBE2EF',
          500: '#3F72AF',
          900: '#112D4E'
        }
      }
    },
  },
  plugins: [],
};
