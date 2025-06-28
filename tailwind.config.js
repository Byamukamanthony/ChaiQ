/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          50: '#fef7ed',
          100: '#fdecd3',
          200: '#fbd5a5',
          300: '#f7b76d',
          400: '#f29332',
          500: '#ed7611',
          600: '#de5d07',
          700: '#b84608',
          800: '#93370e',
          900: '#772f0f',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a3b0a3',
          400: '#7a8a7a',
          500: '#5f6f5f',
          600: '#4a574a',
          700: '#3d473d',
          800: '#333a33',
          900: '#2c312c',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'steam': 'steam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': { opacity: 0.7, transform: 'translateY(0px) scale(1)' },
          '50%': { opacity: 0.4, transform: 'translateY(-20px) scale(1.1)' },
          '100%': { opacity: 0, transform: 'translateY(-40px) scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}