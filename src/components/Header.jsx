import { useState } from 'react'
import PropTypes from 'prop-types'

// React Icons
import { IoMenu } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa'

// Import components
import { Button } from 'antd'
import Logo from './Logo'

const Header = ({ showDrawer }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearch = (event) => {
		event.preventDefault() // Prevent the form from reloading the page
		console.log(searchTerm) // Perform your search logic here
	}

	return (
		<div className="flex items-center justify-between md:justify-center gap-4 p-6">
			<div className="flex items-center md:hidden justify-between">
				<Button type="link" onClick={showDrawer}>
					<IoMenu className="text-4xl" />
				</Button>
				<Logo />
			</div>
			{/* Search bar */}
			<form
				id="search-bar"
				className="flex text-white items-center w-1/3 md:w-1/2 group/search "
				onSubmit={handleSearch}
			>
				<input
					type="text"
					placeholder="Search for music, albums, artists..."
					className="border-solid w-full px-8 py-2 bg-transparent text-white focus:outline-none border border-r-0 rounded-s-full border-white outline-none group-hover/search:border-spotify transition duration-300 ease-in-out"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				></input>
				<button
					type="submit"
					className="border-solid border border-l-0 px-4 py-2 bg-transparent rounded-r-full group border-white outline-none focus:outline-none text-center align-middle group-hover/search:border-spotify transition duration-300 ease-in-out"
				>
					<FaSearch className="rounded-e-full inline-block group-hover/search:text-spotify transition duration-300 ease-in-out" />
				</button>
			</form>
		</div>
	)
}

Header.propTypes = {
	showDrawer: PropTypes.func.isRequired,
}

export default Header
