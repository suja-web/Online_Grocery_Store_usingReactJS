import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
// import HomeCategory from './pages/HomeCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product1 from './pages/Product1';
import Footer from './components/footer/Footer';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Features from './pages/Features';
import Reviews from './pages/Reviews';
import Item from './components/item/Item';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='item' element={<Item />} />
        <Route path='hero' element={<Hero/>} />
        
          </Route>
        <Route path='/features' element={<Features/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='product1' element={<Product1/>}>
          <Route path=':product1Id' element={<Product1/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;