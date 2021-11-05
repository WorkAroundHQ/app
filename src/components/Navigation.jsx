import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from './Logo'
import PageLink from './PageLink'
import '../scss/components/navigation.scss'

const Navigation = () => {
	const [currentPage, setCurrentPage] = useState('/')
	const location = useLocation()
	
	useEffect(() => {
		setCurrentPage(location.pathname)
  }, [location.pathname])

	return (
		<nav className='navigation'>
			<Logo width='42' height='40' color='#3C3C3C' />
			<div className="navigation-pages">
				<PageLink page={{
					href: '/',
					currentPage: currentPage,
					image: 'home',
					text: 'Home'
				}}/>
				<PageLink page={{
					href: '/cities',
					currentPage: currentPage,
					image: 'globe-outline',
					text: 'Cities'
				}}/>
				<PageLink page={{
					href: '/articles',
					currentPage: currentPage,
					image: 'newspaper',
					text: 'Articles'
				}}/>
			</div>
			<div className="navigation-account">
				<PageLink page={{
					href: '/profile',
					currentPage: currentPage,
					image: 'person-circle',
					text: 'Profile'
				}}/>
			</div>
		</nav>
	)
}

export default Navigation
