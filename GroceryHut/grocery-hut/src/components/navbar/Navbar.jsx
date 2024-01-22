import React ,{useContext,useState,useRef} from 'react'
import './Navbar.css'

// import { useState } from 'react'
import logo from '../asset/logo.png'
import cart_icon from '../asset/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/ShopContext'
// import nav_dropdown_icon  from '../asset/dropdown.jpg'


const Navbar = () => {

  // const [menu,setMenu]= useState("home")
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(Shopcontext);
  // const menuRef = useRef();

// const dropdown_toggle = (e) => {
// menuRef.current.classList.toggle('nav-menu-visible');
// e.target.classList.toggle('open');
// }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <Link to="/">
          <p>GroceryHut</p>
        </Link>
      </div>
      {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown_icon} alt="" /> */}
      <ul  className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("features")}}><Link style={{ textDecoration: 'none' }} to='/features'>Features</Link>{menu==="features"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("categories")}}><Link style={{ textDecoration: 'none' }} to='/categories'>Categories</Link>{menu==="categories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("products")}} ><Link style={{ textDecoration: 'none' }} to='/products'>Products</Link>{menu==="products"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("reviews")}}><Link style={{ textDecoration: 'none' }} to='/reviews'>Reviews</Link>{menu==="reviews"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>



    </div>

  )

}

export default Navbar
