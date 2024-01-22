import React from 'react'
import './Offers.css'

import grocery_basket from '../asset/grocery-basket.jpg'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers'>
       <div className='offers-left'>
            <h1>GROCERY OFFERS</h1>
            {/* <h1>Offers For You</h1> */}
            <p>Check Out Some of the Exclusive Grocery Offers , Deals and Discounts</p>
            <button className='offers-left-button'>UPTO 70% OFF</button>
        </div>
        <div className='offers-right'>
        <Link to ="/categories"> <img src={grocery_basket}alt=""/></Link>
        </div>
      
    </div>
    
  )
}

export default Offers
