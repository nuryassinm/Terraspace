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
        raleway: ['Raleway', 'sans-serif'],

      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      colors: {
        primary: '#FD0235',
        secondary: '#1B1F13',
        gray: '#EFEEE',
      },
    },
  },
  plugins: [
    prelinePlugin,
  ],
};
