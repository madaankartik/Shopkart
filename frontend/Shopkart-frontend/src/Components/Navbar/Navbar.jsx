import React, { useState, useContext } from 'react' 
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import menu_icon from '../Assets/nav_dropdown.png'
import { ShopContext } from '../../Context/ShopContext'
import { useAuth } from '../../Context/AuthContext'

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const [menuOpen, setMenuOpen] = useState(false);
    const {cartItems} = useContext(ShopContext)
    const { user, signOut } = useAuth()
    const totalQuantity = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>Shopkart</p>
      </div>
      <ul className={`nav-menu${menuOpen ? ' open' : ''}`} onClick={()=>setMenuOpen(false)}>
        <li onClick={()=>setMenu("shop")}> <Link style={{textDecoration:"none",color:"black"}} to="/">Shop{menu==="shop"?<hr/>:<></>}</Link></li>
        <li onClick={()=>setMenu("mens")}> <Link style={{textDecoration:"none",color:"black"}} to="/mens">Men{menu==="mens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>setMenu("womens")}> <Link style={{textDecoration:"none",color:"black"}} to="/womens">Women{menu==="womens"?<hr/>:<></>}</Link></li>
        <li onClick={()=>setMenu("kids")}> <Link style={{textDecoration:"none",color:"black"}} to="/kids">Kids{menu==="kids"?<hr/>:<></>}</Link></li>
      </ul>
      <div className='nav-login-cart'>
        {user ? (
          <div className='nav-user-profile'>
            <div className='profile-icon'>
              <span>{user.name.charAt(0).toUpperCase()}</span>
            </div>
            <div className='profile-dropdown'>
              <div className='profile-name'>{user.name}</div>
              <button onClick={signOut}>Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
        <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
        <div className='nav-cart-count'>{totalQuantity}</div>
      </div>
      <img src={menu_icon} alt="menu" className='nav-hamburger' onClick={()=>setMenuOpen(!menuOpen)} />
    </div>
  )
}

export default Navbar
