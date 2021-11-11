import { HashRouter as Router, Route } from 'react-router-dom'
import Navigation from "../components/Navigation"
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import Articles from '../pages/Articles'
import Profile from './Profile'
import '../scss/pages/main.scss'

const Main = ({ session }) => {

	return (
    <Router basename='/'>
      <div className='main-container'>
        <Navigation />
        <main className='content'>
          <Route path='/' exact component={Home} />
          <Route path='/cities' exact component={Cities} />
          <Route path='/articles' exact component={Articles} />
          <Route path='/profile' exact render={() => ( <Profile session={session} /> )} />
        </main>
      </div>
    </Router>
	)
}

export default Main
