import Transition from '../utils/Transition'
import { Button as AndButton } from 'antd'

function Home() {
	return (
		<Transition className="flex justify-center items-center flex-col space-y-4">
			<h1 className="text-5xl font-bold">Home</h1>
			<p className="text-gray-600">Welcome to the Home page</p>
			<AndButton type="danger">Button</AndButton>
			<button className="btn btn-neutral">Daisy Button</button>
			<h1 className="text-5xl font-bold">Home</h1>
			<p className="text-gray-600">Welcome to the Home page</p>
			<AndButton type="danger">Button</AndButton>
			<button className="btn btn-neutral">Daisy Button</button>
			<h1 className="text-5xl font-bold">Home</h1>
			<p className="text-gray-600">Welcome to the Home page</p>
			<AndButton type="danger">Button</AndButton>
			<button className="btn btn-neutral">Daisy Button</button>
			<h1 className="text-5xl font-bold">Home</h1>
			<p className="text-gray-600">Welcome to the Home page</p>
			<AndButton type="danger">Button</AndButton>
			<button className="btn btn-neutral">Daisy Button</button>
			<h1 className="text-5xl font-bold">Home</h1>
			<p className="text-gray-600">Welcome to the Home page</p>
			<AndButton type="danger">Button</AndButton>
			<button className="btn btn-neutral">Daisy Button</button>
		</Transition>
	)
}

export default Home
