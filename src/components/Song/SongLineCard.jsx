import PropTypes from 'prop-types'

const SongLineCard = ({
	index,
	imgUrl,
	songName,
	artist,
	release,
	album,
	time,
}) => {
	return (
		<div className="flex w-full items-center gap-4">
			<h1 className="m-0 text-white">#{index}</h1>
			<div className="bg-songcard flex w-full justify-between rounded-2xl overflow-hidden">
				<div className="flex gap-4 flex-1">
					<img src={imgUrl} alt={songName} className="w-28 h-full" />
					<div className="flex flex-col justify-center items-start">
						<h2 className="m-0 text-h2 text-white font-bold">{songName}</h2>
						<p className="m-0 text-white">{artist}</p>
					</div>
				</div>
				<div className="flex-1 flex items-center">
					<h2 className="m-0 text-h3 text-white">{release}</h2>
				</div>
				<div className="flex-1 flex items-center">
					<h2 className="m-0 text-h3 text-white">{album}</h2>
				</div>
				<div className="flex-none flex items-center">
					<h2 className="m-0 pr-6 text-h3 text-white">{time}</h2>
				</div>
			</div>
		</div>
	)
}

SongLineCard.propTypes = {
	index: PropTypes.number,
	imgUrl: PropTypes.string,
	songName: PropTypes.string,
	artist: PropTypes.string,
	release: PropTypes.string,
	album: PropTypes.string,
	time: PropTypes.string,
}

export default SongLineCard
