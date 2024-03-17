/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        phone: '440px',
        tab: '799px',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        'theme-primary': 'var(--text-theme-primary)',
        'theme-hover-primary': 'var(--text-theme-hover-primary)',
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'text-primary': 'var(--text-primary)',
        'text-theme-primary': 'var(--text-theme-primary)',
        'text-theme-hover-primary': 'var(--text-theme-hover-primary)',
        'gray-primary': 'var(--gray-primary)',
        'gray-strong': 'var(--gray-strong)',
        'gray-weak': 'var(--gray-weak)',
        'gray-weak-extra': 'var(--gray-weak-extra)',
        greenGray: '#d9ded9',
      },
    },
  },
  plugins: [],
}
