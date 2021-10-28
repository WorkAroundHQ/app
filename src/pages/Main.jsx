import { useEffect } from 'react'
// import { supabase } from '../supabaseClient'
import Sidenav from "../components/Sidenav"
import Content from '../components/Content'
import '../scss/main.scss'

const Main = ({ session }) => {
  
  useEffect(() => {
    console.log(session)
  }, [session])

	return (
    <div className='main-container'>
      <Sidenav /> 
      <Content />
    </div>
	)
}

export default Main
