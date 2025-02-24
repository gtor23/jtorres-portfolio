const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html", 
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend:{
			colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			stone: colors.warmGray,
			sky: colors.lightBlue,
			neutral: colors.trueGray,
			gray: colors.coolGray,
			slate: colors.blueGray,
			lime: colors.lime,
			rose: colors.rose,
			'theme-dark': '#242424',
			'theme-light': 'rgba(255, 255, 255, 0.87)',
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			monospace: ['Inconsolata', 'monospace'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
		},
		letterSpacing: {
			wide: '.025em',
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold',
				},
				li: {
					letterSpacing: theme('letterSpacing.wide'),
				},
			});
		}),
	],
};