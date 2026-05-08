/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        // Electric lime — premium accent
        brand: {
          50: '#f7ffd1',
          100: '#eeffa1',
          200: '#e5ff70',
          300: '#dcff40',
          400: '#d4ff00',
          500: '#ccff00',
          600: '#a3cc00',
          700: '#7a9900',
          800: '#526600',
          900: '#293300',
        },
        // Matte ink — premium dark
        ink: {
          950: '#030303',
          900: '#0a0a0a',
          800: '#101010',
          700: '#161616',
          600: '#1f1f1f',
          500: '#2a2a2a',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'Impact', 'sans-serif'],
        kinetic: ['"Archivo Black"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%,100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(204,255,0,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(204,255,0,0.7)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(.16,1,.3,1) both',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
}
