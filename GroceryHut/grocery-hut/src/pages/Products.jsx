import React from 'react'
import { Link } from 'react-router-dom'
import './css/Products.css'

import Item from '../components/item/Item'
import Product from '../components/asset/Product'

const Products = () => {
  return (
    <>
    <div>
    <div className='hero1'>
      <Link to='/categories'><img className='main-image2' src="https://www.odishaexpress.com//oe-admin/@upload_img/@topad@/supermarketbigbanner_bls2.jpg" ></img></Link>
    </div>
    <div className='new-collections'>
      <h1> Our Products</h1>
      <hr/>
      <div className='collections'>
        {Product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      </div>
    
        
      
    </div>
    
    


    </>
  )
}

export default Products
