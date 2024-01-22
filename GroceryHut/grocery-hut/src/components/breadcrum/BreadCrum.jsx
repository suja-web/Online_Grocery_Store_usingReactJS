import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../asset/breadcrum_arrow.png'
const BreadCrum = (props) => {
    const {product1} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=""/>SHOP <img src={arrow_icon} alt=""/>{product1.category} <img src={arrow_icon} alt=""/>{product1.name}

      
    </div>
  )
}

export default BreadCrum
