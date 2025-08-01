import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Descriptionbox from '../Components/Descriptionbox/descriptionbox'
import Related from '../Components/Related/related' 

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  
  const product = all_products.find((item) => item.id === Number(productId))
  
  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <Related />
    </div>
  )
}

export default Product

