import React from 'react'
import Navbar from '../Navbar'
import HeroSection from './Main'

const Home = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
      <Navbar />
      <HeroSection/>
    </div>
  )
}

export default Home
