import City from '../components/City'
import '../scss/pages/cities.scss'

const Cities = () => {
	const cityFolder = 'europe/germany/berlin/'

	return (
		<section id='cities'>
			<h1>Cities</h1>
			<City city='Berlin' cityFolder={cityFolder} />
		</section>
	)
}

export default Cities
