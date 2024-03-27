// React Icons
import { FaFire, FaMusic } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

// Import components
import Logo from './Logo'
import ProfileBanner from '../components/Profile/ProfileBanner'

// Location
import { useLocation, Link } from 'react-router-dom'

// Define navigation items
const navItems = [
	{
		label: 'Home',
		path: '/',
		Icon: FaFire,
	},
	{
		label: 'Albums',
		path: '/albums',
		Icon: FaMusic,
	},
	{
		label: 'Setting',
		path: '/setting',
		Icon: IoMdSettings,
	},
]

// Sidebar.js
const Sidebar = () => {
	const location = useLocation()

	// Enhanced isActive function
	const isActive = (path) => {
		return location.pathname === path
			? 'font-bold text-white bg-secondary w-full py-4'
			: ''
	}

	return (
		<div className="bg-transparent w-full h-full space-y-20 flex flex-col">
			{/* Logo image */}
			<div className="hidden md:block my-2">
				<Logo />
			</div>

			{/* SoundBuzz Title in Mobile */}
			<div className="md:hidden text-center text-white">
				<h1 className="text-h1 font-bold text-white">SoundBuzz</h1>
			</div>

			{/* Nav Items */}
			<div className="flex-1">
				<h2 className="text-center text-white">Na&apos;s Page</h2>
				<ul className="space-y-2 list-none flex flex-col items-center justify-between text-h2">
					{navItems.map(({ label, path, Icon }) => (
						<li key={path} className="w-full text-center ">
							<Link
								to={path}
								className={`p-2.5 gap-4 flex items-center justify-center text-white ${isActive(
									path,
								)}`}
							>
								<Icon className="inline-block" />
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Profile */}
			<div className="flex-none hidden md:block">
				<ProfileBanner />
			</div>
		</div>
	)
}

export default Sidebar
