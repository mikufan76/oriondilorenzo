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
        brown: '#6C4B3E',
        darkBrown: '#48271A',
        shade: 'rgba(13, 8, 84, 0.7)',
        paper: '#FFFFF6',
        glow: 'rgba(255,249,203, .6)',
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
        'slide-out-book': 'slide-out 1s ease-in forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(10deg) scale(1.25, 1.25)' },
          '50%': { transform: 'rotate(-10deg) scale(1.25, 1.25)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(500%)' },
        },
      },
      boxShadow: {
        glow: '0px 0px 20px 3px rgba(255,249,203, .3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ['prettier-plugin-tailwindcss'],
    require('tailwindcss-animate'),
  ],
}
