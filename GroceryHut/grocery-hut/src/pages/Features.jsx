import React from 'react'
import './css/Features.css'
import { Link } from 'react-router-dom'
import fresh_organic from '../components/asset/fresh_organic.png'
import free_delievery from '../components/asset/free_delivery.jpeg'
import payment from '../components/asset/payment.png'


const Features = () => {
  return (
    <div>
    <div className='hero1'>
      <Link to='/categories'><img className='main-image2' src="https://st.depositphotos.com/1258191/56891/i/450/depositphotos_568915806-stock-photo-online-grocery-shopping-home-delivery.jpg" ></img></Link>
    </div>
    <section class="features" id="features">
        <h1 class="heading">Our <span>Features</span></h1>

        <div class="box-con">
        <div class="box-container">
            <div class="box">
                <img class='img-1' src={fresh_organic}/>
                <h3>Fresh and Organic</h3>

                <p>Organic Food or grocery is grown in a natural way without using any chemical fertilizers, growth hormones, pesticides, etc. </p>
                {/* <a href='#' class="btn" >Read more</a> */}
                <button class="btn">Read More</button>
            </div>
        </div>

        <div class="box-container">
            <div class="box">
                <img class='img-1' src={free_delievery}/>
                <h3>Free  Delivery</h3>

                <p>We offer free delivery on orders above Rs. 500/- or when you are using credit card, you will get free discount coupons Whether you are  buying groceries online</p>
            {/* <a href='#' class="btn" >Read more</a> */}
                <button class="btn">Read More</button>
            </div>
        </div>

        <div class="box-container">
            <div class="box">
                <img class='img-1' src={payment}/>
                <h3>Easy Payments</h3>

                <p>PayG payment gateway ensures easy, fast, and secure payment collection for the grocery merchants with super-cool features.Shop smarter and pay in easy installments </p>
                {/* <a href='#' class="btn" >Read more</a> */}
                <button class="btn">Read More</button>
            </div>
        </div>
        </div>
    </section>
    
    </div>

  )
}

export default Features
