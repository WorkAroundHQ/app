import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import City from '../components/City'
import '../scss/pages/cities.scss'

const Cities = () => {
	const [cities, setCities] = useState([])
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		if (!loaded) getCities()
	}, [loaded, cities])
	
	const getCities = async () => {
		try {
			const { data: cities, error } = await supabase
			.from('cities')
			.select(`
				name,
				countries (
					name
				),
				bucket_folder
			`)
			if (error) throw error
			setLoaded(true)
			setCities(cities)
		} catch (error) {
			console.log('Error downloading image: ', error.message)
		}
	}

	return (
		<section id='cities'>
			<h1>Cities</h1>
			<div className='cities-list'>
				{cities.map((city) => (
					<City city={city} key={city.name} />
				))}
			</div>
		</section>
	)
}

export default Cities
