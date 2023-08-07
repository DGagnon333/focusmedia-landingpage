import React from 'react'
import Outdoor3 from '@Images/outdoor3.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={Outdoor3} alt='/' />
      <div className='bg-black/30 absolute top-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-3xl'>Focused on helping you elevate the quality of
           your content with our next level drone photography services</p>
          <button className='bg-white text-black'>Contact Us!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
