import React from 'react'
import Navbar from '../Navbar'
import HeroSection from './CompanyName'
import Details from './Main'

const Home = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
      <Navbar />
      <HeroSection/>
      <Details/>
    </div>
  )
}

export default Home
