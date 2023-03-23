/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      adelia: ["ArticulatCF-700", "san-serif"],
    },
    colors : {
      'primary': {
        10: 'rgba(229, 242, 254, 1)',
        50 : '#007AF4',
        100:'#FECA03',
        200:'#00CEFC'
      },
      'white':{
        10: '#FFFFFF',
        30:'rgba(148, 160, 180, 1)',
        40:'rgba(250, 251, 255, 1)',
        50:'rgba(229, 229, 229, 1)',
        60:'rgba(238, 242, 248, 1)'
      },
      'secondary':{
        10:'#130F49',
        20:'rgba(125, 124, 255, 1)'
      }
    },
    extend: {},
  },
  plugins: [],
});
