// import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	content: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./assets/**/*.css',
	],
	theme: {
		extend: {
			colors: {
				dark: '#1e1e1e',
			},
			fontSize: {
				xxxs: '.5rem',
				xxs: '.675rem',
			},
			fontFamily: {
				sans: ['NotoSans, Ubuntu, Helvetica, Arial, sans-serif'],
			},
			zIndex: {
				1: '1',
				5: '5',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
				1000: '1000',
				1500: '1500',
			},
		},
	},
	plugins: [],
};
