import React from 'react'
import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar'
import Whatwedo from '../components/sections/Whatwedo'
import Feature from '../components/layout/Feature'
import Materials from '../components/sections/Materials'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Whatwedo />
      <Feature />
      <Materials />
      <Footer />
    </>

  )
}

export default Home