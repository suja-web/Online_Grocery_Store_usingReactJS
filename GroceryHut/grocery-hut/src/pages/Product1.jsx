import React from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/breadcrum/BreadCrum'
import ProductDisplay from '../components/productdisplay/ProductDisplay'

const Product1 = () => {
  const{all_product}=useContext(Shopcontext)
  const{product1Id} = useParams();
  const product1 = all_product.find((e)=>e.id===Number(product1Id));

  return (
    <div>
      <BreadCrum product1={product1}/>
      <ProductDisplay product1={product1}/>
    </div>
  )
}

export default Product1
