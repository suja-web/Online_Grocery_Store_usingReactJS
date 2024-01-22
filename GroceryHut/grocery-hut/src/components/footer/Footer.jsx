import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footer_logo from '../asset/logo_big.png'
import instagram_icon from '../asset/instagram_icon.png'
import pintester_icon from '../asset/pintester_icon.png'
import whatsapp_icon from '../asset/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=""/>
            <p>GroceryHut</p>
        </div>
        <ul className='footer-links'>
        <Link to ="/"><li>Home</li> </Link>
        <Link to ="/products"><li>Products</li> </Link>
        <Link to ="/categories"> <li>Categories</li> </Link>
        
            
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @Sevenmentor 2024 - All Rights Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
