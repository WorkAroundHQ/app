import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import PreviewCityImage from '../components/PreviewCityImage'
import '../scss/pages/cities.scss'

const Cities = () => {
	const cityFolder = 'europe/germany/berlin/'
	const [imagePaths, setImagePaths] = useState([])
	const [imageSources, setImageSources] = useState({})

	useEffect(() => {
		console.log('city folder hook')
    if (cityFolder) getImagePaths(cityFolder)
  }, [cityFolder])

	useEffect(() => {
		console.log('image path hook')
    if (imagePaths) getSignedUrl(imagePaths)
  }, [imagePaths])

	const getImagePaths = async (cityFolder) => {
		try {
      const { data, error } = await supabase.storage.from('city-images').list(cityFolder)
      if (error) {
        throw error
      }
			const imagePaths = data.map(img => {
				return `${cityFolder}${img.name}`
			})
      setImagePaths(imagePaths)
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
		<section id='cities'>
			<h1>Cities</h1>
			<PreviewCityImage city='Berlin' imageSources={imageSources} />
		</section>
	)
}

export default Cities
