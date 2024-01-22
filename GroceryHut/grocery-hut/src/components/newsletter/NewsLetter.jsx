import React, { useState } from 'react'

import './NewsLetter.css'

const NewsLetter = () => {
  const [email, setEmail] = useState({
    email:''
    

})
  const handleSubmit =(e)=>{
    // setEmail("")
    alert("Subscription Done" )

  }
  const handleEmailChange =(e)=>{
    setEmail({...email,email:e.target.value})

  }
  return (
    <div className='newsletter'>
       <h1>Get Exclusive Offers on Your Email</h1>
       <p>Subscribe to our newsletter and stay updated</p>
       <div>
        <input type="email" placeholder='Your Email id'name='email' value={email.email} onChange={handleEmailChange} />
        <button onClick={handleSubmit}>Subscribe</button>
        </div> 
      
    </div>
  )
}

export default NewsLetter
