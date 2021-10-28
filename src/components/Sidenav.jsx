import Logo from './Logo'
import PageLink from './PageLink'
import '../scss/sidebar.scss'

const Sidenav = () => {
	return (
		<nav className='sidebar'>
			<div className='sidebar-top'>
				<Logo width='42' height='40' color='#3C3C3C' />
				<div className="sidebar-pages">
					<PageLink image='home' text='Home' />
					<PageLink image='globe-outline' text='Cities' />
					<PageLink image='newspaper' text='Articles' />
				</div>
			</div>
			<div className="sidebar-account">
				<PageLink image='person-circle' text='Account' />
			</div>
		</nav>
	)
}

export default Sidenav
