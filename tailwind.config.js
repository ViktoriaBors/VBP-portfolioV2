/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'lg': '5px 10px 15px 5px rgb(0 0 0 / 0.1), 5px 4px 6px 5px rgb(0 0 0 / 0.1)',
      }
    },
    colors: {
      'greenv': '#50AB65',
      'brownl': '#E3D7CB',
      'brownd': '#7D5A4B',
      'gray': '#ECEBE4',
      'grayl': '#F0F0F0',
      'white': '#FFFFFF',
      'slate': '#cbd5e1',
      'black': '#000000',
      'blue': '#2A809B',
      'blackDark' : '#00161B',
      'blueDark': '#1E2C2E0',
      'deepBlackDark': '#1E1E1E',
      'cardDark': '#1D3543',
      'greenBlackDark': "#1E2C2E",
      'greengrayDark': '#152E33'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 800px) { ... }

      'lg': '1160px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
