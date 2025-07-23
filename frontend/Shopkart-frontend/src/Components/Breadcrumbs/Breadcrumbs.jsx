import React from 'react'
import './Breadcrumbs.css'
import breadcrum_arrow from '../Assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props
    
    return (
        <div className='breadcrumbs'>
            Home <img src={breadcrum_arrow} alt="" /> Shop <img src={breadcrum_arrow} alt="" />{product.category} <img src={breadcrum_arrow} alt="" />{product.name}
        </div>
    )
}

export default Breadcrumbs
