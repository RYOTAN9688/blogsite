module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        'color-change-2x': 'color-change-2x 2s linear  infinite alternate both',
      },
      keyframes: {
        'color-change-2x': {
          '0%': {
            background: '#19dcea',
          },
          to: {
            background: '#b22cff',
          },
        },
      },
      fontFamily: {
        fancy: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
