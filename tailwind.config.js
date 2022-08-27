module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs-': { 'max': '639px' },
        'xl+': { 'min': '1440px' },

      }
    },
  },
  plugins: [],
}