/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '760px',
      // => @media (min-width: 768px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1770px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        topToBottom: {
          '0%': {
            transform: 'translateY(0%)',
            opacity: '0.5'
          },
          '100%': {
            transform: ' translateY(100%)',
            opacity: '0'
          }
        },
        bottomToTop: {
          '100%': {
            transform: ' translateY(-100%)',
            opacity: '0'
          },
          '0%': {
            transform: 'translateY(0%)',
            opacity: '0.5'
          }
        }
      },
      animation: {
        topToBottom: 'topToBottom 3.5s ease-in-out infinite',
        bottomToTop: 'bottomToTop 3.5s ease-in-out infinite',
      }
    }
  },
  plugins: []

};
