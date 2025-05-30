/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      bg: 'var(--background-color)',
      primary: 'var(--primary-color)',
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
    },
    // Overriding fontFamily to use @next/font loaded families

    extend: {
      strokeWidth: {
        starline: '1.5%',
        star: '4.5%',
        name: '1%',
        logosm: '.9%',
        logo: '1.3%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ['prettier-plugin-tailwindcss'],
    require('tailwindcss-animate'),
  ],
}
