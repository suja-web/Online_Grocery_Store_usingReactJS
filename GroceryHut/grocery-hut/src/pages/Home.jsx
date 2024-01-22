import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollection from '../components/newcollection/NewCollection'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
