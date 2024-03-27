// Import music player
import Waveform from '../MusicPlayer/Waveform'

// Import Assets
import Avatar from '../../assets/img/profile/demo.png'

// Profile
const avatarPath = Avatar
const name = 'Nguyen Anh'

const ProfileBanner = () => {
	return (
		<div className="flex flex-col items-center justify-between bg-profile-gradient pt-8 rounded-t-2xl">
			<h2 className="text-white text-h1 font-bold">Profile</h2>
			<img src={avatarPath} alt="avatar" className="w-48 h-48 rounded-full" />
			<h2 className="text-white text-h2 capitalize">{name}</h2>

			{/* Music Player */}
			<Waveform />
		</div>
	)
}

export default ProfileBanner
