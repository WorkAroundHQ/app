const CityImage = (city, imageSources) => {
	return (
	<picture className='city-image'>
			<source type="image/webp" media="(min-width: 56.25rem)" srcset={imageSources.lWebp} />
			<source type="image/jpeg" media="(min-width: 56.25rem)" srcset={imageSources.lJpg} />

			<source type="image/webp" media="(min-width: 37.5rem)" srcset={imageSources.mWebp} />
			<source type="image/jpeg" media="(min-width: 37.5rem)" srcset={imageSources.mJpg} />

			<source type="image/webp" srcset={imageSources.sWebp} />
			<source type="image/jpeg" srcset={imageSources.sJpg} />

			<img src={imageSources.mJpg} style="width: 100%;" alt={city} />
	</picture>
	)
}

export default CityImage
