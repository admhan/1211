/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0b0c10',
          light: '#f7f9fc'
        },
        accent: {
          dark: '#6f6ce8',
          light: '#2563eb'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
