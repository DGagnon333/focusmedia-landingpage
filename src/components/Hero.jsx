import LongVideo from '@Videos/FocusMedia_Kick_off.mp4'
import AlternativeImage from 'images/aerialPhotos/DJI_0336.jpg'

const Hero = () => {

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className='flex items-center h-screen overflow-hidden'>
      <video loop autoPlay muted playsInline className="max-w-none" poster={AlternativeImage}>
        <source src={LongVideo} type="video/mp4" />
      </video>
      <div className='absolute top-0 flex flex-col justify-center w-full h-full'>
        <div className='backdrop-blur-xl rounded-3xl max-w-[400px] m-2 py-4 pl-2 md:left-[10%] absolute self-center'>
          <p className='z-10 drop-shadow-2xl py-2 text-xl text-white'>Focused on helping you elevate the quality of
           your content with our next level drone photography services</p>
          <button onClick={scrollToBottom} className='flex bg-white text-black self-center mx-auto'>Contact Us!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
