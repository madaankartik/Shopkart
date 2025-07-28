import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import { AuthProvider } from './Context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AuthProvider>
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} /> 
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
