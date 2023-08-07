/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors:{
      primary: '#69c423',
      test: '#000000',
      white: '#fff',
      secondary: '#001524',
      gray:'#abb8c3',
      gray1:'#54595F',
      'gray': {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#52525b',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
  },
  plugins: [],
}

