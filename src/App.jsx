// Header + Footer + Routes
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import MainRoutes from './MainRoutes'

const App = () => {
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex  min-h-screen">
				<div
					className={
						'w-64 flex-shrink-0 hidden md:block m-2 overflow-hidden rounded-xl'
					}
				>
					<Sidebar />
				</div>
				{/* <div className="flex flex-col flex-grow" style={{ maxHeight: '100vh' }}>
					<div className="overflow-auto">
						<div className="flex items-center">
							<label
								htmlFor="my-drawer-3"
								className="btn btn-square btn-ghost md:hidden"
							>
								<IoMenu className="text-4xl" />
							</label>
							<Header />
						</div>
						<MainRoutes />
						<Footer />
					</div>
				</div> */}
				{/* Main content area flex container */}
				<div className="flex flex-col flex-grow" style={{ maxHeight: '100vh' }}>
					<div className="flex-none flex items-center m-2">
						{/* Fixed Header */}
						<Header htmlFor="my-drawer-3" />
					</div>
					{/* Scrollable MainRoutes */}
					<div className="flex-grow overflow-auto p-2">
						<MainRoutes />
						<Footer />
					</div>
				</div>
			</div>
			{/* Sidebar */}
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>{' '}
				{/* Overlay to close drawer on click */}
				<div className={'w-64 flex-shrink-0 h-full'}>
					<Sidebar />
				</div>
			</div>
		</div>
	)
}

export default App
