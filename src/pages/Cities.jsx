import { useState } from 'react'
import { supabase } from '../supabaseClient'
import City from '../components/City'
import '../scss/pages/cities.scss'

const Cities = () => {
	const [cities, setCities] = useState([])
	const [loaded, setLoaded] = useState(false)

	// useEffect(() => {
	// 	if (!loaded) getCities()
	// }, [loaded, cities])
	
	const getCities = async () => {
		try {
			const { data: cities, error } = await supabase
			.from('cities')
			.select(`
				id,
				name,
				countries (
					name
				),
				bucket_folder
			`)
			if (error) throw error
			getLikedCities(cities)
		} catch (error) {
			console.error('Error getting cities: ', error.message)
		}
	}

	const getLikedCities = async (cities) => {
		try {
			const { data: likedCities, error } = await supabase
  			.from('user_likes_city')
  			.select('id, city_id')

			if (error) throw error
			for (const city of cities) {
				city.liked = false
				for (const likedCity of likedCities) {
					if (city.id === likedCity.city_id) {
						city.liked = true
					}
				}
			}
			setLoaded(true)
			setCities(cities)
		} catch (error) {
			console.error('Error getting liked cities: ', error.message)
		}
	}

	const toggleLike = (cityToToggle) => {
		const updatedCity = { ...cityToToggle, liked: !cityToToggle.liked }

    setCities(cities.map((city) => {
			if (city.id === updatedCity.id) {
				return { ...city, liked: updatedCity.liked }
			} else {
				return city
			}
		}))
  }

	if (!loaded) getCities()

	return (
		<section id='cities'>
			<h1>Cities</h1>
			<div className='cities-list'>
				{cities.map((city) => (
					<City key={city.name} city={city} onToggle={toggleLike} />
				))}
			</div>
		</section>
	)
}

export default Cities
