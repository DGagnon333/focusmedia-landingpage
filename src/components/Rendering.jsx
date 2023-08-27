import React from 'react'
import RenderVideo from '@Videos/3DRendering.mp4'

function Rendering() {
  return (
    <div className='flex flex-wrap self-center justify-center py-3 mx-auto lg:w-[50%]'>
        <video src={RenderVideo} muted autoPlay loop className='w-full h-full' />
    </div>
  )
}

export default Rendering