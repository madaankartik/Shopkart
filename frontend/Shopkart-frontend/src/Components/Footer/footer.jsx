import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import pinterest from '../Assets/pintester_icon.png'

const footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footer_logo} alt="logo" />
          <p>Shopkart</p>
        </div>
        
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        
        <div className="footer-social-icon">
          <div className="footer-icon-container">
            <img src={instagram} alt="Instagram" />
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp} alt="WhatsApp" />
          </div>
          <div className="footer-icon-container">
            <img src={pinterest} alt="Pinterest" />
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
      </div>
    </footer>
  )
}

export default footer
