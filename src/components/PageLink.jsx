import '../scss/page-link.scss'

const PageLink = ({ image, text }) => {
	return (
		<div className='pagelink'>
			<ion-icon name={image}></ion-icon>
			<p className='pagelink-text'>{text}</p>
		</div>
	)
}

export default PageLink
