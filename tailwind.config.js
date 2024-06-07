/** @type {import('tailwindcss').Config} */
import tailwindcssFilters from 'tailwindcss-filters';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        moontserat: ['Montserrat', 'sans-serif'],
      },
      filter: {
        'white': 'brightness(0) invert(1)',
      },
      variants: {
        filter: ['responsive'],
      },
      colors: {
        primary: '#003B32',
        secondary: '#A8E6CF',  // Contoh custom warna biru
        biru: '#00BFFF',
        emas: '#FFC107',
        abu: '#CCCCCC',
        orange: '#FFA500'
        // Contoh custom warna oranye
        // customGreen: {
        //   light: '#6EE7B7',
        //   DEFAULT: '#10B981',
        //   dark: '#047857',
        // },
        // customGray: {
        //   100: '#F3F4F6',
        //   200: '#E5E7EB',
        //   300: '#D1D5DB',
        //   400: '#9CA3AF',
        //   500: '#6B7280',
        //   600: '#4B5563',
        //   700: '#374151',
        //   800: '#1F2937',
        //   900: '#111827',
        // },
      },
    },
  },
  plugins: [
    tailwindcssFilters,
    function ({ addUtilities }) {
      const newUtilities = {
        '.filter-white': {
          filter: 'brightness(0) invert(1)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

