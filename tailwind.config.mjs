/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gold': {
          50: '#fbf7ed',
          100: '#f7efdb',
          200: '#efdeb7',
          300: '#e7cd93',
          400: '#dfbc6f', // main gold
          500: '#d7ab4b',
          600: '#c99a3a',
          700: '#a77d2f',
          800: '#8a6526',
          900: '#6d4e1f',
        },
        'navy': {
          50: '#f0f3f8',
          100: '#e0e7f1',
          200: '#c1cfe3',
          300: '#a2b7d5',
          400: '#839fc7',
          500: '#6487b9', // main navy
          600: '#4c6fa1',
          700: '#3d5a84',
          800: '#2e4567',
          900: '#1f304a',
        },
        'emerald': {
          50: '#edf7f5',
          100: '#dbeee9',
          200: '#b7ddd3',
          300: '#93ccbd',
          400: '#6fbba7',
          500: '#4baa91', // main emerald
          600: '#3a997f',
          700: '#2f7d68',
          800: '#266451',
          900: '#1f4b3a',
        },
        'burgundy': {
          50: '#f9f2f4',
          100: '#f3e5e9',
          200: '#e7ccd3',
          300: '#dbb3bd',
          400: '#cf9aa7',
          500: '#c38191', // main burgundy
          600: '#b7687b',
          700: '#995465',
          800: '#7b404f',
          900: '#5d2c39',
        },
        'cream': {
          50: '#fdfcf8',
          100: '#fbf9f1',
          200: '#f7f3e3',
          300: '#f3edd5',
          400: '#efe7c7',
          500: '#ebe1b9',
          600: '#d4caa7',
          700: '#aea689',
          800: '#88826b',
          900: '#625e4d',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'luxury-lg': '0 10px 30px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}