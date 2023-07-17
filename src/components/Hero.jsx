import React from 'react'
import Outdoor3 from '@Images/outdoor3.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src={Outdoor3} alt='/'/>
        <div className='bg-black/30 absolute top-0 w-full h-screen'/>
        <div  className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>Focus Media</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>lorem ipsum</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Aliqua eu adipisicing minim proident aliqua. Duis amet nostrud consequat labore aliquip 
            eu irure ullamco anim mollit. Pariatur aliqua et laboris voluptate cupidatat nostrud labore 
            quis exercitation et in. Commodo laborum veniam laborum dolor nulla. Voluptate et pariatur 
            commodo exercitation ad enim elit.</p>
            <button className='bg-white text-black'>Reserve Now</button>
          </div>
        </div>
    </div>
  )
}

export default Hero