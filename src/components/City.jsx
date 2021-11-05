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

	const getImagePaths = async (cityFolder) => {
		const imagePaths = []
		try {
      const { data, error } = await supabase.storage.from('city-images').list(cityFolder)
      if (error) {
        throw error
      }
			for (const img of data) {
				imagePaths.push(`${cityFolder}${img.name}`)
			}
			setLoaded(true)
      getSignedUrl(imagePaths)
    } catch (error) {
      console.log('Error getting signed url: ', error.message)
    }
	}

	const getImgKey = (path) => {
		const fileName = path.split('/').at(-1)
		const imgSize = fileName.split('-')[0]
		let imgType = fileName.split('.')[1]
		imgType = imgType[0].toUpperCase() + imgType.substring(1)
		return `${imgSize}${imgType}`
	}

	const getSignedUrl = async (paths) => {
		let imgSources = {}
		for (const path of paths) {
			const fileName = getImgKey(path)
			try {
				console.info(`GET SIGNED URL: ${path}`)
				const { data, error } = await supabase.storage.from('city-images').createSignedUrl(path, 3600)
				if (error) {
					throw error
				}
				imgSources = {...imgSources, [fileName]: data.signedURL}
			} catch (error) {
				console.log('Error getting signed url: ', error.message)
			}
		}
		setImageSources(imgSources)
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
