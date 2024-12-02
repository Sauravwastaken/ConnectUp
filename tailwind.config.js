/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      colors:{
        'theme_black':"#04010F",
        'theme_purple':"#B8A6FF",
        'theme_blue':"#D4DCF9",
        'theme_green':"#D5FDCD",
        'theme_light_blue':"#f1ecff",
        'theme_linear_1':"#f5f2ff"
      }
    },
    screens: {
			xl: { max: "1100px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "950px" },
			// => @media (max-width: 1023px) { ... }

      bg: {max:"850px"},

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
}

