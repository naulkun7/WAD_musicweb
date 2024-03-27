import LogoImg from '../assets/logo.svg'

const Logo = () => {
	return (
		<a href="/" className="flex md:flex-col items-center justify-center">
			<img
				src={LogoImg}
				alt="logo"
				className="w-24 md:w-64 h-auto object-cover bg-no-repeat"
			/>
			<span className="hidden md:block text-h1 font-bold">SoundBuzz</span>
		</a>
	)
}

export default Logo
