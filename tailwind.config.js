/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'def-blue': '#3c8cbd',
      'blue': '#6bc0ff',
      'd-blue': '#244363',
      'vd-blue': '#1c354f',
      'p-blue': '#eafefc',
      'l-blue': '#d1f6fc',
      'yellow': '#fbff60',
      'fuschia': '#ff4dee',
      'purple': '#d411a4',
      'p-purple': '#ffd4f2',
      'd-purple': '#ffd1fb',
      'white': '#fff',
    },
    fontFamily: {
      subtitle: ['Oswald', 'sans-serif'],
      corps: ['Open Sans', 'sans-serif'],
      title: ['Rajdhani', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
