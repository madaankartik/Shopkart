import React from 'react'
import './popular.css'
import data_product from '../Assets/data'
import Items from '../items/items'

const popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />  
        <div className="popular-item">
            {data_product.map((item)=>(
                <Items key={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            ))}
        </div>
    </div>
  )
}

export default popular
