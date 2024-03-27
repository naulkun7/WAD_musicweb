import PropTypes from 'prop-types'

const SongSection = ({ title, colorTitle, children }) => {
	return (
		<div className="w-5/6">
			<h1 className="text-white capitalize font-bold tracking-wide">
				{title} <span className="text-secondary">{colorTitle}</span>
			</h1>
			{children}
		</div>
	)
}

SongSection.propTypes = {
	title: PropTypes.string.isRequired,
	colorTitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default SongSection
