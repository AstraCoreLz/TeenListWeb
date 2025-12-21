/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // Apple风格颜色
        'apple-blue': '#0071e3',
        'apple-gray': '#fbfbfd',
        'apple-text': '#1f2937',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'apple': '0 8px 40px rgba(0,0,0,0.08)',
        'apple-hover': '0 12px 60px rgba(0,0,0,0.12)',
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};