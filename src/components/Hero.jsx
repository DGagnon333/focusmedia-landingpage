import LongVideo from '@Videos/FocusMedia_Kick_off.mp4'
import AlternativeImage from 'images/aerialPhotos/DJI_0336.jpg'
const Hero = () => {

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className='relative flex items-center justify-center h-screen overflow-hidden'>
      <video loop autoPlay muted className="w-auto min-w-full min-h-full max-w-none" poster={AlternativeImage}>
        <source src={LongVideo} type="video/mp4" />
      </video>
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
