// Sidebar.js
const Sidebar = () => {
	return (
		<div className="bg-gray-800 text-white w-64 h-full">
			<div className="p-5 font-bold">My App</div>
			<ul className="space-y-2">
				<li>
					<a href="#" className="block p-2.5 hover:bg-gray-700">
						Home
					</a>
				</li>
				<li>
					<a href="#" className="block p-2.5 hover:bg-gray-700">
						About
					</a>
				</li>
				<li>
					<a href="#" className="block p-2.5 hover:bg-gray-700">
						Services
					</a>
				</li>
				<li>
					<a href="#" className="block p-2.5 hover:bg-gray-700">
						Contact
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar
