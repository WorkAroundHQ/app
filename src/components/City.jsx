import { useEffect, useState } from 'react'
import PreviewCityImage from '../components/PreviewCityImage'
import '../scss/components/city.scss'

const City = ({ city, onToggle }) => {
	const [imageSources, setImageSources] = useState({})
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		if (!loaded) getImagePaths(city.bucket_folder)
  })
	
	const getImgKey = (size, type) => {
		type = type[0].toUpperCase() + type.substring(1)
		return `${size}${type}`
	}

	const getImagePaths = async (cityFolder) => {
		const imagePaths = {}
		const sizes = ['s', 'm', 'l']
		const types = ['webp', 'jpg']
		for (const type of types) {
			for (const size of sizes) {
				let image = await import(`../assets/city-images/${cityFolder}${size}.${type}`)
				imagePaths[getImgKey(size, type)] = image.default
			}
		}
		setLoaded(true)
		setImageSources(imagePaths)
	}

	return (
		<div className='city'>
			<div className={`city-like${city.liked ? ' liked' : ''}`} onClick={() => onToggle(city.id)}>
				{city.liked ? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}
			</div>
			<PreviewCityImage city={city.name} imageSources={imageSources} />
			<div className='city-attributes'>
				<div className='city-details'>
					<p className='city-name'>{city.name}</p>
					<p className='city-country'>{city.countries.name}</p>
				</div>
				<div className='city-info'>
					<ion-icon name="partly-sunny"></ion-icon>
					<p>17°C</p>
				</div>
			</div>
		</div>
	)
}

export default City
