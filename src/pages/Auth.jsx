import { useState } from 'react'
import { supabase } from '../supabaseClient'
import Logo from '../components/Logo'
import Input from '../components/Input'
import Button from "../components/Button"
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
    <div className='auth'>
      <div className='auth-container'>
      <div className="auth-body">
      <div className="auth-header">
        <Logo width='42' height='40' color='#8423FF' />
        <h1 className='auth-heading'>{signUpMode ? 'Sign up' : 'Login'}</h1>
      </div>
      <div className="auth-form">
        <div className='auth-inputs'>
            <Input type='email' placeholder='Your email' onChange={(e) => setEmail(e.target.value)} onEnter={(e) => handleEnterPress(e)} />
            <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} onEnter={(e) => handleEnterPress(e)} />
            {signUpMode ? 
              <Input type='password' placeholder='Repeat Password' onChange={(e) => setRepeatedPassword(e.target.value)} onEnter={(e) => handleEnterPress(e)} /> : ''
            }
          </div>
          <Button text={loading ? 'Loading' : signUpMode ? 'Sign Up' : 'Login'} mode='primary' disabled={loading} onClick={e => handlePrimaryButtonClick(e)} />
      </div>
      </div>
        <div className="auth-footer">
          <p>{signUpMode ? 'Already have an account? Login ' : 'Don\'t have an account? Sign up '}
            <button onClick={(e) => {
              e.preventDefault()
              setAuthMode(!signUpMode)
            }}>here</button>
          </p>
        </div>
      </div>
    </div>
	)
}

export default Auth
