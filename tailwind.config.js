/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #F367A3, #F0CBEB, #AF8AF3, #68D2E1)',
      },
    },
  },
  plugins: [],
}
