/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          lighterBlue: '#e5fcf5',
          lightBlue: '#0094f090',
        },
        fontFamily : {
          'josefin':["Josefin Sans", 'sans-serif']
        }
      }
    },
  },
  plugins: [],
}