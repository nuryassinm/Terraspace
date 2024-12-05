/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Bowel', 'sans-serif'], // Ensure this matches your desired font
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      colors: {
        gray: {
          50: '#F9F9F9',
          100: '#F3F3F3',
          600: '#666666',
          400: '#9CA3AF',
          800: '#1F2937',
        },
      },
    },
  },
  plugins: [
    prelinePlugin,
  ],
};
