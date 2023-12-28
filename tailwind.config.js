/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      primary: ["Red Hat Display", 'sans-serif'],
      secondary: ['DM Sans', 'serif'],
    },
    extend: {
      colors: {
        'primary-blue': '#77AEF4',
        'secondary-blue': '#5D93D9',
        'text-primary': '#2B3674',
        'text-secondary': '#A3AED0'
      },
    },
  },
  plugins: [],
}

