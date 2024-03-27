import { useState } from 'react'
import styled from 'styled-components'

// React Icons
import { Drawer as AntDrawer, Divider as AntDivider } from 'antd'

// Header + Footer + Routes + Sidebar
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import MainRoutes from './MainRoutes'
import Waveform from './components/MusicPlayer/Waveform'

// Custom Ant Design Components
const Drawer = styled(AntDrawer)`
	/* Override Ant Design Drawer styles */
	.ant-drawer-content {
		background-color: #93b1a6 !important; /* Makes the background transparent */
	}
`
const Divider = styled(AntDivider)`
	/* Override Ant Design Divider styles */
	.ant-divider-vertical {
		margin: 0;
	}
`

const App = () => {
	// Drawer
	const [open, setOpen] = useState(false)
	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	return (
		<div className="bg-[linear-gradient(180deg,#040D12_0%,#183D3D_100%)]">
			<div className="flex min-h-screen">
				{/* Sidebar */}
				<div className="flex-shrink-0 hidden md:block mr-0 overflow-hidden rounded-md w-1/6">
					<Sidebar />
				</div>

				{/* Divider */}
				<Divider
					type="vertical"
					className="bg-white h-screen hidden md:flex m-0"
				/>

				{/* Main Content */}
				<div className="flex flex-col flex-grow min-h-screen ml-1">
					<Header showDrawer={showDrawer} />
					{/* Scrollable MainRoutes */}
					<div className="flex-grow overflow-auto m-1 rounded-md space-y-2">
						<MainRoutes />
					</div>
					<Footer />
				</div>

				{/* Waveform sticky on mobile */}
				<div className="fixed bottom-0 left-0 right-0 z-10 md:hidden">
					{/* <Waveform /> */}
					<Waveform />
				</div>
			</div>

			{/* Sidebar on mobile */}
			<Drawer
				placement={'left'}
				closable={false}
				onClose={onClose}
				open={open}
				width={200}
			>
				<Sidebar />
			</Drawer>
		</div>
	)
}

export default App
