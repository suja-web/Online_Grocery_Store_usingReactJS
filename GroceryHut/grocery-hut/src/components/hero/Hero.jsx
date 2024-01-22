import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

import arrow_icon from '../asset/arrow.png'


const Hero = () => {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/products')
    }
  return (
    <div className='hero'>
        <img className='main-image' src="https://www.buniyaa.com/cdn/shop/articles/WhatsApp_Image_2022-09-24_at_18.36.18.jpg?v=1664029013" ></img>
        <div className='hero-para'>
            <h2 className='main-h2'>Grocery at Home..</h2>
            <h1 className='main-h1'>Your Daily Needs..</h1>
            
                <button onClick={handleClick} style={{backgroundColor:"salmon",width:310,height:70,margin:15,color:"black",borderRadius:75,fontSize:22}} className='btn'>SHOP NOW</button>
                <img src={arrow_icon} alt=""/>

            
        </div>
        
        

      
    </div>
  )
}

export default Hero
