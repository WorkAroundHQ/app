const CityImage = ({ city, imageSources }) => {
	return (
	<picture>
			<source type="image/webp" media="(min-width: 56.25rem)" srcSet={imageSources.lWebp} />
			<source type="image/jpeg" media="(min-width: 56.25rem)" srcSet={imageSources.lJpg} />

			<source type="image/webp" media="(min-width: 37.5rem)" srcSet={imageSources.mWebp} />
			<source type="image/jpeg" media="(min-width: 37.5rem)" srcSet={imageSources.mJpg} />

			<source type="image/webp" srcSet={imageSources.sWebp} />
			<source type="image/jpeg" srcSet={imageSources.sJpg} />

			<img className='city-image' src={imageSources.mJpg} alt={city} />
	</picture>
	)
}

export default CityImage
