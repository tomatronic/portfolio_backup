/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'offers': "url('/coffeeshop.png')",
        'beer':"url('/brewtifulBg.png')",
        'designFlows':"url('/dfbg.png')",
      },
    },
    fontFamily:{
      sans: ['Source Sans Pro', 'sans-serif']
    }
  },
  plugins: [],
}
