import { useState } from 'react'
import { supabase } from '../supabaseClient'
import City from '../components/City'
import '../scss/pages/cities.scss'

const Cities = () => {
	const [cities, setCities] = useState([])
	const [loaded, setLoaded] = useState(false)
	
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
			getUserLikedCities(cities)
		} catch (error) {
			console.error('Error getting cities: ', error.message)
		}
	}

	const getUserLikedCities = async (cities) => {
		try {
			let { data: userLikedCities, error } = await supabase
  			.from('user_likes_city')
  			.select('id, city_id, user_id, liked')

			if (error) throw error
			for (const city of cities) {
				city.liked = false
				for (const userLikedCity of userLikedCities) {
					if (city.id === userLikedCity.city_id) {
						city.liked = userLikedCity.liked
					}
				}
			}
			setLoaded(true)
			setCities(cities)
		} catch (error) {
			console.error('Error getting liked cities: ', error.message)
		}
	}

	const getUserCityLikeRelation = async (cityId) => {
		try {
			const { data: userCityLikeRelation, error } = await supabase
  			.from('user_likes_city')
  			.select(`
					id,
					city_id,
					user_id,
					liked
				`)
				.eq('city_id', cityId)

			if (error) throw error
			return userCityLikeRelation
		} catch (error) {
			console.error('Error getting liked cities: ', error.message)
		}
	}

	const updateUserCityLikeRelation = async (updatedRelation) => {
		try {
			const updates = {
				id: updatedRelation.id,
				liked: updatedRelation.liked,
				user_id: updatedRelation.user_id,
				city_id: updatedRelation.city_id
			}
			let { error } = await supabase
				.from('user_likes_city')
				.upsert(updates, { returning: 'minimal' })

			if (error) throw error
		} catch (error) {
			console.error('Error updating user cities relation: ', error)
		}
	}

	const createUserCityLikeRelation = async (cityId, liked) => {
		try {
			const { error } = await supabase
			.from('user_likes_city')
			.insert([
				{
					user_id: supabase.auth.user().id,
					city_id: cityId,
					liked: liked
				}
			])

			if (error) throw error
		} catch (error) {
			console.error('Error inserting user cities relation: ', error)
		}
	}

	const applyChanges = (cityId, likedValue) => {
		setCities(cities.map((city) => {
			if (city.id === cityId) {
				return { ...city, liked: likedValue }
			} else {
				return city
			}
		}))
	}

	const toggleLike = async (cityId) => {
		const userCityLikeRelation = await getUserCityLikeRelation(cityId)
		if (userCityLikeRelation.length !== 0) {
			const updatedRelation = { ...userCityLikeRelation[0], liked: !userCityLikeRelation[0].liked }
			updateUserCityLikeRelation(updatedRelation)
			applyChanges(updatedRelation.city_id, updatedRelation.liked)
		} else {
			createUserCityLikeRelation(cityId, true)
			applyChanges(cityId, true)
		}
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
