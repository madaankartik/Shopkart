import React from 'react'
import './related.css'
import all_products from '../Assets/all_product.js'
import { Link } from 'react-router-dom'
            
const related = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
            {all_products.slice(0, 4).map((item, i) => (
          <Link to={`/product/${item.id}`} key={i} className='item-link' onClick={handleClick}>
            <div className='item'>
              <div className='item-image'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <div className="collection-prices">
                        <span className="new-price">₹{item.new_price}</span>
                        <span className="old-price">₹{item.old_price}</span>
                    </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default related
