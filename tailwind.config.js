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
				songcard: '#1F1F1F',
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				'luckiest-guy': ['Luckiest Guy', 'cursive'],
			},
			fontSize: {
				h1: '3rem',
				h2: '2rem',
				h3: '1.125rem',
				h4: '1rem',
				h5: '0.813rem',
				h6: '0.67rem',
			},
			backgroundImage: {
				'profile-gradient':
					'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, #183D3D 100%)',
			},
		},
	},

	plugins: [],
}
