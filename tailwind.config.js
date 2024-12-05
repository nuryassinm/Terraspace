/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','Bowel','sans-serif'], // You might want to adjust this to match the exact font
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
        }
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
