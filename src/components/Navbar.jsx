import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <>
      <div className='bg-black w-full h-16 flex items-center justify-between px-10 relative  border-red-700 border-'>

        {/* Left: Green Box */}
        <div className="h-10 w-20 bg-red-700"></div>

        {/* Center: Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-zinc-500 text-2xl flex space-x-8 sarpanch-regular">
          <p>home</p>
          <p>projects</p>
          <p>contact</p>
        </div>

        {/* Right: YASH */}
        <div className="text-white silkscreen-regular text-3xl">YASH</div>

      </div>
    </>
  )
}

export default Navbar
