import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import CityImage from '../components/CityImage'

const Cities = () => {
	const [imagePaths, setImagePaths] = useState(null)
	const [imageSources, setImageSources] = useState(null)
  const [uploading, setUploading] = useState(false)
	const cityFolder = 'europe/germany/berlin/'

	useEffect(() => {
    if (cityFolder) getImagePaths(cityFolder)
  }, [cityFolder])

	useEffect(() => {
    if (imagePaths) getSignedImageSources(imagePaths)
  }, [imagePaths])

	const getImagePaths = async (cityFolder) => {
		try {
			const { data, error } = await supabase.storage.from('city-images').list(cityFolder)
			if (error) {
				throw error
			}

			const imagePaths = data.map(image => {
				return `${cityFolder}${image.name}`
			})
			console.log(imagePaths)
			setImagePaths(imagePaths)
		} catch (error) {
			console.log('Error getting image paths: ', error.message)
		}
	}

	const getSignedImageSources = async (imagePaths) => {
		let signedImageSources = {}

		imagePaths.forEach(async path => {
				console.log(`Path: ${path}`)
				try {
					const { signedURL, error } = await supabase.storage.from('city-images').createSignedUrl(path, 3600)
					if (error) {
						throw error
					}
					signedImageSources[path] = signedURL
				} catch (error) {
					console.log('Error getting image paths: ', error.message)
				}
			})
			
		console.log(signedImageSources)
		setImageSources(signedImageSources)
	}
	
	return (
		<section id='cities'>
			<h1>Cities</h1>

		</section>
	)
}

export default Cities
