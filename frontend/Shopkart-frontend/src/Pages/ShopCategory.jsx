import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './Css/shopcategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/items/items'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className='banner-container'>
        <img src={props.banner} alt="" className='shopcategory-banner' />
      </div>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'> 
        {all_products.map((item, index) => {
          if(props.category === item.category){
            return (
              <Items key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            )
          } else {
            return null;
          }  
        })}
      </div>
    </div>
  )
}

export default ShopCategory