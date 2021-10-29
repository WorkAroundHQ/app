import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from "../components/Navigation"
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import Articles from '../pages/Articles'
import Account from '../pages/Account'
import '../scss/pages/main.scss'

const Main = ({ session }) => {
  useEffect(() => {
    console.log(session)
  }, [session])

	return (
    <Router>
      <div className='main-container'>
        <Navigation />
        <main className='content'>
          <Route path='/' exact component={Home} />
          <Route path='/cities' exact component={Cities} />
          <Route path='/articles' exact component={Articles} />
          <Route path='/account' exact component={Account} />
        </main>
      </div>
    </Router>
	)
}

export default Main
