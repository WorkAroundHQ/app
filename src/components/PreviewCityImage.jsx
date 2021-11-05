const PreviewCityImage = ({ city, imageSources }) => {
	return (
	<picture>
			<source type="image/webp" srcSet={imageSources.sWebp} />
			<source type="image/jpeg" srcSet={imageSources.sJpg} />

			<img className='preview-city-image' src={imageSources.sJpg} alt={city} />
	</picture>
	)
}

export default PreviewCityImage
