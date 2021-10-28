import { Link } from 'react-router-dom'
import '../scss/components/page-link.scss'

const PageLink = ({ page }) => {
	return (
		<Link to={page.href} className='react-link'>
			<div className={`page-link${page.active ? ' active' : ''}`}>
				<ion-icon name={page.image}></ion-icon>
				<p className='page-link-text'>{page.text}</p>
			</div>
		</Link>
	)
}

export default PageLink
