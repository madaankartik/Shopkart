import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className='newsletter'>
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our newsletter and stay updated with our latest products and exclusive offers. Be the first to know about new collections and special discounts!</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder='Enter your email address' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <span>Subscribe</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {isSubscribed && (
            <div className="success-message">
              <span>✅ Successfully subscribed!</span>
            </div>
          )}
        </form>
      </div>
      <div className="newsletter-decoration">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
