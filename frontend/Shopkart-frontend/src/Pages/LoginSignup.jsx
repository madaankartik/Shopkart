import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import './Css/loginSignup.css'

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [agreed, setAgreed] = useState(false)
  
  const { signUp, signIn } = useAuth()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      let result
      
      if (isSignUp) {
        if (!agreed) {
          setError('Please agree to the Terms of Use and Privacy Policy')
          setLoading(false)
          return
        }
        result = await signUp(formData.name, formData.email, formData.password)
      } else {
        result = await signIn(formData.email, formData.password)
      }

      if (result.success) {
        navigate('/')
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsSignUp(!isSignUp)
    setFormData({ name: '', email: '', password: '' })
    setError('')
    setAgreed(false)
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        
        {error && (
          <div className='error-message'>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className='loginsignup-fields'>
            {isSignUp && (
              <input
                type="text"
                name="name"
                placeholder='Your Name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>
        
        <p className='loginsignup-login'>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
          <span onClick={toggleMode}>
            {isSignUp ? ' Sign In' : ' Sign Up'}
          </span>
        </p>
        
        {isSignUp && (
          <div className='loginsignup-agree'>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <p>By continuing, I agree to the Terms of Use and Privacy Policy</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginSignup
