// import { useState } from 'react'
import Logo from './Logo'
import PageLink from './PageLink'
import '../scss/components/navigation.scss'

const Navigation = () => {
	return (
		<nav className='sidebar'>
			<div className='sidebar-top'>
				<Logo width='42' height='40' color='#3C3C3C' />
				<div className="sidebar-pages">
					<PageLink page={{
						href: '/',
						active: false,
						image: 'home',
						text: 'Home'
					}}/>
					<PageLink page={{
						href: '/cities',
						active: false,
						image: 'globe-outline',
						text: 'Cities'
					}}/>
					<PageLink page={{
						href: '/articles',
						active: false,
						image: 'newspaper',
						text: 'Articles'
					}}/>
				</div>
			</div>
			<div className="sidebar-account">
			<PageLink page={{
						href: '/account',
						active: false,
						image: 'person-circle',
						text: 'Account'
					}}/>
			</div>
		</nav>
	)
}

export default Navigation
