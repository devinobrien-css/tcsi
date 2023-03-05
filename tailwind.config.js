/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    screens: {
			'sm': '640px',
			'md': '1200px',
			'lg': '1224px',
			'xl': '1380px',
			'2xl': '1536px',
		},
    extend: {
      colors:{
        'tcsi-yellow':'#FEE201',
        'tcsi-green':'#A4DF53',
        'tcsi-dark-green':'#B0DD68',
        'tcsi-navy':'#390052',
        'tcsi-lightblue':'#268fcc',
        'tcsi-blue':'#488DC7'
      },
      fontFamily: {
        'lato':['Lato','sans-serif'],
        'teko':['Teko', 'sans-serif'],
        'roboto':['Roboto', 'sans-serif']
			},
      backgroundImage:{
        'gradient':'url(./resources/img/bg-gradient.svg)',
        'concert':'url(./resources/img/concert.jpg)',
        'standard':'url(./resources/img/bg.png)'
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus', 'group-hover'],
      scale:['responsive','hover','group-hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
}