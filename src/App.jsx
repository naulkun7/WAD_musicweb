import { useState } from 'react'
import styled from 'styled-components'

// React Icons
import { Drawer as AntDrawer, Divider as AntDivider } from 'antd'

// Header + Footer + Routes + Sidebar
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import MainRoutes from './MainRoutes'

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
				<div className="flex-shrink-0 hidden md:block m-1 mr-0 overflow-hidden rounded-md w-1/5">
					<Sidebar />
				</div>
				{/* Divider */}
				<Divider type="vertical" className="bg-white h-screen hidden md:flex" />
				{/* Main Content */}
				<div className="flex flex-col flex-grow min-h-screen m-1">
					<Header showDrawer={showDrawer} />
					{/* Scrollable MainRoutes */}
					<div className="flex-grow overflow-auto m-1 rounded-md space-y-2">
						<MainRoutes />
					</div>
					<Footer />
				</div>
			</div>
			{/* Sidebar */}
			{/* Overlay to close drawer on click */}
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
