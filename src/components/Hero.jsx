import React from 'react'
import VideoComponent from './VideoComponent'

const Hero = () => {

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div className='relative flex items-center 
    justify-center h-screen overflow-hidden'>
      {/* <img className='top-0 left-0 w-full h-screen object-cover' src={Outdoor3} alt='/' /> */}
      <VideoComponent />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className=' backdrop-blur-xl rounded-3xl md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className='z-10 max-w-[600px] drop-shadow-2xl py-2 text-3xl'>Focused on helping you elevate the quality of
           your content with our next level drone photography services</p>
          <button onClick={scrollToBottom} className='bg-white text-black'>Contact Us!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
