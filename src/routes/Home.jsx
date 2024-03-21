import Transition from '../utils/Transition'
import Banner from '../components/Banner'

function Home() {
	return (
		<Transition className="flex justify-center items-center flex-col space-y-4 container mx-auto">
			<Banner />
		</Transition>
	)
}

export default Home
