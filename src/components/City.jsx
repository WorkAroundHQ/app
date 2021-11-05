import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import PreviewCityImage from '../components/PreviewCityImage'
import '../scss/components/city.scss'

const City = ({ city }) => {
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
