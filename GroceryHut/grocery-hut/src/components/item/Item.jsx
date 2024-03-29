import React from 'react'
import './Item.css'
import { Link  } from 'react-router-dom'
const Item = (props) => {
  return (
    <div>
      <div className='item'>
      <Link to={`/product1/${props.id}`}><img  style={{height:400,width:300}}src={props.image}alt=""/></Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
        &#8377; {props.new_price}
        </div>
        <div className='item-price-old'>
        &#8377; {props.old_price}
        </div>

      </div>
      </div>
    </div>
  )
}

export default Item
