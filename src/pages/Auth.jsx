import { useState } from 'react'
import { supabase } from '../supabaseClient'
import Input from '../components/Input'
import '../scss/pages/auth.scss'

const Auth = () => {
	const [loading, setLoading] = useState(false)
  const [signUpMode, setAuthMode] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

	const handleLogin = async (email, password) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({
        email: email,
        password: password
      })
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (email, password, repeatedPassword) => {
    if (password.length > 8) {
      if (password === repeatedPassword) {
        try {
          setLoading(true)
          const { error } = await supabase.auth.signUp({
            email: email,
            password: password
          })
          if (error) throw error
          alert('Check your email for the confirmation link!')
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          setLoading(false)
        }
      } else {
        alert('The passwords are not equal. Please try again')
      }
    } else {
      alert('The password is not long enough. At least 8 characters are required')
    }
  }

  const handlePrimaryButtonClick = async (e) => {
      e.preventDefault()
      if (signUpMode) {
        handleSignup(email, password, repeatedPassword)
      } else {
        handleLogin(email, password)
      }
  }

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') handlePrimaryButtonClick(e)
  }

	return (
		<div className='auth-container'>
			<h1 className='auth-header'>{signUpMode ? 'Sign up' : 'Login'}</h1>
			<div className='auth-form'>
          <Input type='email' placeholder='Your email' onChange={(e) => setEmail(e.target.value)} onEnter={(e) => handleEnterPress(e)} />
          <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} onEnter={(e) => handleEnterPress(e)} />
          {signUpMode ? 
						<Input type='password' placeholder='Repeat Password' onChange={(e) => setRepeatedPassword(e.target.value)} onEnter={(e) => handleEnterPress(e)} /> : ''
					}
        </div>
				<div className='auth-buttons'>
          <button className='auth-button primary'
            disabled={loading}
            onClick={e => handlePrimaryButtonClick(e)}
          >
            {loading ? 'Loading' : signUpMode ? 'Signup' : 'Login'}
          </button>
          <button className='auth-button'
            onClick={(e) => {
              e.preventDefault()
              setAuthMode(!signUpMode)
            }}
          >
            {signUpMode ? 'Already have an account? Login here' : 'Don\'t have an account? Sign up here'}
          </button>
        </div>
		</div>
	)
}

export default Auth
