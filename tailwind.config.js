/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	corePlugins: { preflight: false },
	theme: {
		extend: {
			colors: {
				white: '#F9F9F9',
				black: '#000000',
				primary: '#040D12',
				secondary: '#93B1A6',
				spotify: '#1bd760',
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				'luckiest-guy': ['Luckiest Guy', 'cursive'],
			},
			fontSize: {
				h1: '3rem',
				h2: '1.5rem',
				h3: '1.125rem',
				h4: '1rem',
				h5: '0.813rem',
				h6: '0.67rem',
			},
		},
	},

	plugins: [],
}
