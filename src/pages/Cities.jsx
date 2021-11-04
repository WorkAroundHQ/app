import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import CityImage from '../components/CityImage'

const Cities = () => {
	const cityFolder = 'europe/germany/berlin/'
	const [imagePaths, setImagePaths] = useState([])
	const [imageSources, setImageSources] = useState([])
	const [imageUrl, setImageUrl] = useState(null)

	useEffect(() => {
		console.log('city folder hook')
    if (cityFolder) getImagePaths(cityFolder)
  }, [cityFolder])

	useEffect(() => {
		console.log('image path hook')
    if (imagePaths) getSignedUrl(imagePaths)
  }, [imagePaths])

	useEffect(() => {
		console.log('image source hook')
    if (imageSources) console.log(imageSources)
  }, [imageSources])

	const getImgKey = (imgName) => {
		const imgSize = imgName.split('-')[0]
		let imgType = imgName.split('.')[1]
		imgType = imgType[0].toUpperCase() + imgType.substring(1)
		return `${imgSize}${imgType}`
	}

	const getSignedUrl = async (paths) => {
		let neww = []
		for (const path of paths) {
			try {
				const { data, error } = await supabase.storage.from('city-images').createSignedUrl(path, 3600)
				if (error) {
					throw error
				}
				neww = [...neww, data.signedURL]
				
			} catch (error) {
				console.log('Error getting signed url: ', error.message)
			}
		}
		setImageSources(neww)
  }

	const getImagePaths = async (cityFolder) => {
		try {
      const { data, error } = await supabase.storage.from('city-images').list(cityFolder)
      if (error) {
        throw error
      }

			const imagePaths = data.map(img => {
				return `${cityFolder}${img.name}`
			})

			// console.log(imagePaths)
      setImagePaths(imagePaths)
    } catch (error) {
      console.log('Error getting signed url: ', error.message)
    }
	}

	const getSignedImageSources = (cityFolder, image) => {
		supabase.storage.from('city-images').createSignedUrl(`${cityFolder}${image.name}`, 3600)
		.then((res) => {
			try {
				if (res.error) throw res.error
				const imgKey = getImgKey(image.name)
				return {[imgKey]: res.signedURL}
			} catch (error) {
				console.log('Error getting image paths: ', error.message)
			}
		})
	}

	return (
		<section id='cities'>
			<h1>Cities</h1>
			<CityImage city='Berlin' imageSources={imageSources} />
			<img src={imageUrl} alt='Berlin' />
		</section>
	)
}

export default Cities
