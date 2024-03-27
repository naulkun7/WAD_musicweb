import { useState, useEffect, useRef } from 'react'

// PropTypes
import PropTypes from 'prop-types'

// Components
import { Divider } from 'antd'
import WavesurferPlayer from '@wavesurfer/react'

// React Icons
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa'
import { TiArrowLoop } from 'react-icons/ti'

const MediaBtn = ({ icon, onClick }) => {
	return (
		<a
			className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent"
			onClick={onClick}
		>
			{icon}
		</a>
	)
}

const Waveform = () => {
	// Music Player Audio
	const albumImg = 'https://placehold.co/400'

	// Import many audio files
	const audioList = [
		{
			title: 'Demo',
			url: '/audio/demo1.mp3',
		},
		{
			title: 'Demo 2',
			url: '/audio/demo2.mp3',
		},
		{
			title: 'Demo 3',
			url: '/audio/demo3.mp3',
		},
	]

	const [wavesurfer, setWavesurfer] = useState(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

	// Looping state
	const [isLooping, setIsLooping] = useState(false)
	const isLoopingRef = useRef(isLooping)

	useEffect(() => {
		isLoopingRef.current = isLooping
	}, [isLooping])

	useEffect(() => {
		const finishListener = () => {
			if (isLoopingRef.current) {
				wavesurfer.seekTo(0) // Move playback to the start
				wavesurfer.play() // Start playback again
			}
		}

		wavesurfer?.on('finish', finishListener)

		// Cleanup
		return () => {
			wavesurfer?.un('finish', finishListener)
		}
	}, [wavesurfer])

	const onReady = (ws) => {
		setWavesurfer(ws)
		setIsPlaying(false)
	}

	const onPlayPause = () => {
		wavesurfer?.playPause()
	}

	const onPrevious = () => {
		if (currentTrackIndex > 0) {
			setCurrentTrackIndex(currentTrackIndex - 1)
		} else {
			// Go to the last track when the first track is reached
			setCurrentTrackIndex(audioList.length - 1)
		}
	}

	const onNext = () => {
		if (currentTrackIndex < audioList.length - 1) {
			setCurrentTrackIndex(currentTrackIndex + 1)
		} else {
			// Go to the first track when the last track is reached
			setCurrentTrackIndex(0)
		}
	}

	const toggleLoop = () => {
		setIsLooping(!isLooping)
	}

	return (
		<div className="grid grid-cols-3 w-full h-auto bg-black rounded-t-2xl py-6">
			<div className="flex items-center justify-center w-full h-full">
				<img
					className="w-28 h-28 md:w-20 md:h-20 rounded-lg"
					src={albumImg}
					alt="album art"
				/>
			</div>
			<div className="w-full px-8 flex flex-col justify-between col-span-2 space-y-2">
				<p className="text-white mb-1 text-h2">
					{audioList[currentTrackIndex].title}
				</p>

				<WavesurferPlayer
					height={10}
					waveColor="#fff"
					progressColor="#93B1A6"
					cursorColor="transparent"
					url={audioList[currentTrackIndex].url}
					onReady={onReady}
					normalize={true}
					barWidth={2}
					barGap={3}
					barRadius={30}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
				/>
				<div className="flex items-center justify-around">
					<MediaBtn icon={<FaStepBackward />} onClick={onPrevious} />
					<MediaBtn
						icon={isPlaying ? <FaPause /> : <FaPlay />}
						onClick={onPlayPause}
					/>
					<MediaBtn icon={<FaStepForward />} onClick={onNext} />
					<Divider type="vertical" className="h-full bg-white " />
					<MediaBtn
						icon={
							isLooping ? (
								<TiArrowLoop className="text-secondary" />
							) : (
								<TiArrowLoop />
							)
						}
						onClick={toggleLoop}
					/>
				</div>
			</div>
		</div>
	)
}

MediaBtn.propTypes = {
	icon: PropTypes.element,
	onClick: PropTypes.func,
}

export default Waveform
