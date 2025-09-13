/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#83a9ac',
        dark: '#222222',
        light: '#747474',
        footer: '#0e0b08',
        link: '#cccccc',
        line: '#f8f8f8',
        lightBg: '#f8f4f1',
        placeholder: '#a9a9a9',
      }
    },
  },
  plugins: [],
}