import { useEffect } from 'react'
// import { supabase } from '../supabaseClient'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import '../scss/home.scss'

const Home = ({ session }) => {
  
  useEffect(() => {
    console.log(session)
  }, [session])

	return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
	)
}

export default Home
