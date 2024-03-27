import PropTypes from 'prop-types'

import { FaPlay } from 'react-icons/fa'
import { Button as AntButton } from 'antd'

const Banner = ({ title, desc, bannerUrl }) => {
	return (
		<div
			className={`bg-cover bg-center h-auto w-full relative rounded-xl py-10 px-10 md:px-14`}
			style={{
				backgroundImage: `url(${bannerUrl})`,
			}}
		>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.80)_7.21%,rgba(0,0,0,0.00)_101.11%)]"></div>
			<div className="relative w-1/3">
				<h1 className="text-white">{title}</h1>
				<p className="line-clamp-3 text-white">{desc}</p>
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

Banner.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	bannerUrl: PropTypes.string,
}

export default Banner
