/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': 'var(--black)',
        'color': 'var(--color)',
        'white-smoke': 'var(--white-smoke)',
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',
        'brown': 'var(--brown)',
      },
    },
  },
  plugins: [],
};