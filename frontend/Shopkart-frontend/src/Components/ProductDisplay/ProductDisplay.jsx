import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt="" />   
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
            <p className='productdisplay-right-price-old'>₹{product.old_price}</p>
            <p className='productdisplay-right-price-new'>₹{product.new_price}</p>
        </div>
        <div className='productdisplay-right-description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga doloremque hic mollitia, vitae ipsa fugit quia possimus! Rem amet vel libero quis dicta, tempora voluptatem voluptatibus voluptate, totam nisi ad.
            </div>
            <div className='productdisplay-right-size'>
                <p>Select Size</p>
                <div className='productdisplay-right-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            <p className='productdisplay-right-category'>Category: <span>Women , T-shirt , Crop Top</span></p>
            <p className='productdisplay-right-category'>Tags: <span>Modern , Latest , Casual , Party , Casual , Party , Casual , Party</span></p>
        </div>
      </div>
  
  )
}

export default ProductDisplay
