import { IoMenu } from 'react-icons/io5'

const Header = (htmlFor) => {
	return (
		<div className="navbar flex items-center bg-base-100 gap-4">
			<label htmlFor={htmlFor} className="btn btn-square btn-ghost md:hidden">
				<IoMenu className="text-4xl" />
			</label>
			<div className="md:hidden flex-1 gap-2">
				<a className="text-h2">MUZIC</a>
			</div>
			<div className="flex-1 form-control">
				<input
					type="text"
					placeholder="Search"
					className="input input-bordered w-1/2 rounded-full bg-transparent"
				/>
			</div>
			<div className="flex-none gap-2">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header
