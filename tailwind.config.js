module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        baby: {
          50: '#fffafb',
          100: '#ffecf6',
          200: '#ffdceb',
          300: '#ffc6df',
          400: '#f8b0d4',
          500: '#ed93be',
          600: '#d978a6',
          700: '#c0628e',
          800: '#9e4f74',
          900: '#84405f',
        },
      },
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1500px',
      // => @media (min-width: 1400px) { ... }
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
