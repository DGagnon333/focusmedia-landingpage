/** @type {import('tailwindcss').Config} */
module.exports = {
  theme:{
    fontFamily: {
      'sans': ['Evogria', 'Helvetica', 'Arial', 'Quicksand']
    }
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

