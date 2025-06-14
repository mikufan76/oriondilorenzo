const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Overriding fontFamily to use @next/font loaded families

    extend: {
      strokeWidth: {
        starline: '1.5%',
        star: '4.5%',
        name: '1%',
        logosm: '.9%',
        logo: '1.3%',
      },
      boxShadow: {
        glow: '0px 0px 20px 3px rgba(255,249,203, .3)',
        bookBorder: '0px 0px 10px 5px rgba(0,0,0,.3) inset;',
      },
      colors: {
        bg: 'var(--background-color)',
        primary: 'var(--primary-color)',
        hilight: '#fffad8',
        yellow: '#ffee1f',
        pink: '#ff00dc',
        blue: '#0043d8',
        red: '#e50000',
        green: '#7bff3e',
        purple: '#a100ff',
        cyan: '#9ff8ff',
        brown: '#A78064',
        table: 'rgba(0, 0, 0, 0.1)',
        shade: 'rgba(13, 8, 84, 0.7)',
        paper: '#FFFFF6',
        glow: 'rgba(255,249,203, .6)',
        sticky: {
          100: '#fff9b1',
          200: '#d5f692',
          300: '#b384bb',
          400: '#FFFCC4',
        },
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
        'slide-out-book': 'slide-out .5s ease-in forwards',
        'custom-fade': 'fade-out .9s ease-in forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '98%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'scale(0)' },
        },
        'fade-out': {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '98%': { opacity: 0, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ['prettier-plugin-tailwindcss'],
    require('tailwindcss-animate'),
  ],
};
