import React from 'react'
import './NewConnections.css'
import new_collections from '../Assets/new_collections'

function NewConnections() {
  return (
    <div className='new-connections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collections.slice(0, 4).map((item,index)=>(
                <div className="collection" key={index}>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <div className="collection-prices">
                        <span className="new-price">₹{item.new_price}</span>
                        <span className="old-price">₹{item.old_price}</span>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default NewConnections
