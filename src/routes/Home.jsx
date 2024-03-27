// import { useEffect, useState } from 'react'

import Transition from '../utils/Transition'

// Layout
import SongSection from '../layouts/SongSection'

// Components
import Banner from '../components/Banner'
import SongCard from '../components/Song/SongCard'
import SongLineCard from '../components/Song/SongLineCard'
import { Carousel as AntdCarousel, Divider, List, Skeleton } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'

// fake data
const songCardData = [
	{
		title: 'Happier Than Ever',
		artist: 'Billie Eilish',
		coverUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
	},
	{
		title: 'HIEUTHU@',
		artist: 'Billie Eilish',
		coverUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
	},
	{
		title: 'HUHU',
		artist: 'Billie Eilish',
		coverUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
	},
	{
		title: 'OKE',
		artist: 'Billie Eilish',
		coverUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
	},
	{
		title: '12321',
		artist: 'Billie Eilish',
		coverUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
	},
	{
		title: '12321',
		artist: 'Billie Eilish',
		coverUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
	},
]

const weeklySongs = [
	{
		index: 1,
		imgUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
		songName: 'Lost Cause',
		artist: 'Billie Eilish',
		release: 'Jun 2 2021',
		album: 'Happier Than Ever',
		time: '3:32',
	},
	{
		index: 2,
		imgUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
		songName: 'Therefore I Am',
		artist: 'Billie Eilish',
		release: 'Nov 12 2020',
		album: 'Happier Than Ever',
		time: '2:54',
	},
	{
		index: 3,
		imgUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
		songName: 'Your Power',
		artist: 'Billie Eilish',
		release: 'Apr 29 2021',
		album: 'Happier Than Ever',
		time: '4:05',
	},
	{
		index: 4,
		imgUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
		songName: 'NDA',
		artist: 'Billie Eilish',
		release: 'Jul 9 2021',
		album: 'Happier Than Ever',
		time: '3:15',
	},
	{
		index: 5,
		imgUrl:
			'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711566382/hieuthu2_zr3zuz.webp',
		songName: 'My Future',
		artist: 'Billie Eilish',
		release: 'Jul 30 2020',
		album: 'Happier Than Ever',
		time: '3:30',
	},
]

function Home() {
	// const [loading, setLoading] = useState(false)
	// const [data, setData] = useState([])
	// const loadMoreData = () => {
	// 	if (loading) {
	// 		return
	// 	}
	// 	setLoading(true)
	// 	fetch(
	// 		'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo',
	// 	)
	// 		.then((res) => res.json())
	// 		.then((body) => {
	// 			setData([...data, ...body.results])
	// 			setLoading(false)
	// 		})
	// 		.catch(() => {
	// 			setLoading(false)
	// 		})
	// }
	// useEffect(() => {
	// 	loadMoreData()
	// }, [])

	const bannerUrl =
		'https://res.cloudinary.com/dpmcy6bbr/image/upload/v1711560220/banner_xw5eza.jpg'

	return (
		<Transition className="flex justify-center items-center flex-col space-y-6  mx-auto">
			{/* Hero Section */}
			<div className="w-5/6 rounded-2xl overflow-hidden">
				<AntdCarousel dotPosition="right">
					<Banner
						title="Billie Eilish"
						desc="You can have easy access to every song of billie eilish by just clicking on the Listen now botton. You can also follow him too for suppurting him and keeping it up with what he dose."
						bannerUrl={bannerUrl}
					/>
					<Banner
						title="Billie Eilish"
						desc="You can have easy access to every song of billie eilish by just clicking on the Listen now botton. You can also follow him too for suppurting him and keeping it up with what he dose."
						bannerUrl={bannerUrl}
					/>
					<Banner
						title="Billie Eilish"
						desc="You can have easy access to every song of billie eilish by just clicking on the Listen now botton. You can also follow him too for suppurting him and keeping it up with what he dose."
						bannerUrl={bannerUrl}
					/>
				</AntdCarousel>
			</div>

			{/* Weekly top songs */}
			<SongSection title="Weekly Top" colorTitle="Songs">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full gap-3">
					{songCardData.map((song, index) => (
						<div key={index} className="flex items-center justify-center">
							<SongCard
								title={song.title}
								artist={song.artist}
								coverUrl={song.coverUrl}
							/>
						</div>
					))}
				</div>
			</SongSection>

			{/* Trending Songs */}
			<SongSection title="Trending" colorTitle="Songs">
				<div
					id="scrollableDiv"
					style={{
						height: 180,
						overflow: 'auto',
					}}
				>
					<InfiniteScroll
						dataLength={weeklySongs.length}
						// next={loadMoreData}
						hasMore={weeklySongs.length < 50}
						loader={
							<Skeleton
								avatar
								paragraph={{
									rows: 1,
								}}
								active
							/>
						}
						endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
						scrollableTarget="scrollableDiv"
					>
						<List
							dataSource={weeklySongs}
							renderItem={(item, index) => (
								<List.Item key={index}>
									<SongLineCard
										index={item.index}
										imgUrl={item.imgUrl}
										songName={item.songName}
										artist={item.artist}
										release={item.release}
										album={item.album}
										time={item.time}
									/>
								</List.Item>
							)}
						/>
					</InfiniteScroll>
				</div>
			</SongSection>
		</Transition>
	)
}

export default Home
