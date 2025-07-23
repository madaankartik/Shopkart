import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'

const items = (props) => {
  return (
    <div className='items'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="item" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="new-price">
        ₹{props.new_price}
        </div>
        <div className="old-price">
        ₹{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default items
