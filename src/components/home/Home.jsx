import React from 'react'
import Navbar from '../Navbar'
import HeroSection from './CompanyName'
import Details from './Main'
import Skills_Icon from './Skills_Icon'

const Home = () => {
  return (
    <div className='bg-black min-h-screen w-full'>
      <Navbar />
      <HeroSection/>
      <Details/>
      <Skills_Icon/>
    </div>
  )
}

export default Home
