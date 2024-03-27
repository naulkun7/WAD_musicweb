import PropTypes from 'prop-types'

const SongCard = ({ title, artist, coverUrl }) => {
	return (
		<div className="bg-songcard p-4 rounded-2xl w-60">
			{/* Image */}
			<div className="flex items-center justify-center">
				<img src={coverUrl} alt={title} className="w-full h-52 rounded-2xl" />
			</div>
			{/* Title */}
			<div>
				<h3 className="text-white font-semibold my-1 line-clamp-1 w-full">
					{title}
				</h3>
				<p className="m-0 text-white">{artist}</p>
			</div>
		</div>
	)
}

SongCard.propTypes = {
	title: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	coverUrl: PropTypes.string.isRequired,
}

export default SongCard
