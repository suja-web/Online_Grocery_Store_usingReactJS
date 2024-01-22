import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ProductDisplay.css'
import star_icon from "../asset/star_icon.png"
import star_dull_icon from "../asset/star_dull_icon.png"
import { Shopcontext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    // const navigate = useNavigate()

    // const handleClick = ()=>{
    //     navigate('/cart')
    // }
    const {product1} = props;

    const {addToCart} = useContext(Shopcontext)
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product1.image} alt=""/>
                <img src={product1.image} alt=""/>
                <img src={product1.image} alt=""/>
                <img src={product1.image} alt=""/>
                
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product1.image}alt=""/>
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product1.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon}alt=""/>
                <img src={star_icon}alt=""/>
                <img src={star_icon}alt=""/>
                <img src={star_icon}alt=""/>
                <img src={star_dull_icon}alt=""/>
                <p>(122)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">&#8377;{product1.old_price}</div>
                <div className="productdisplay-right-price-new">&#8377;{product1.new_price}</div>

                
            </div>
            <div className="productdisplay-right-description">
                 {product1.description}
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Quantity</h1>
                <div className="productdisplay-right-size">
                    <div>250gm</div>
                    <div>500gm</div>
                    <div>750gm</div>
                    <div>1kg</div>
                    

                </div>
            </div>
            <div className='container'>
            <button onClick={()=>{addToCart(product1.id)}} className='productdisplay-right-size-btn'>ADD TO CART</button>
            {/* <Link to='/item'><button className='productdisplay-right-size-btn'>Back to Home</button></Link> */}
            </div>


        </div>
      
    </div>
  )
}

export default ProductDisplay
