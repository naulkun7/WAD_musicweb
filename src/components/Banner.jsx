import { FaPlay } from 'react-icons/fa'
import { Button as AntButton } from 'antd'

const Banner = () => {
	return (
		<div className='bg-[url("/img/banner.jpeg")] bg-cover bg-center h-auto w-5/6 relative rounded-xl py-10 px-10 md:px-14'>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.80)_7.21%,rgba(0,0,0,0.00)_101.11%)]"></div>
			<div className="relative w-1/3">
				<h1 className="text-white">Billie Eilish</h1>
				<p className="line-clamp-3 text-white">
					You can have easy access to every song of billie eilish by just
					clicking on the Listen now botton. You can also follow him too for
					supporting him and keeping it up with what he dose.
				</p>
				<AntButton
					ghost
					className="flex items-center justify-center text-white w-max py-3 px-4 gap-6"
				>
					<FaPlay className="text-sm" />
					Play now
				</AntButton>
			</div>
		</div>
	)
}

export default Banner
