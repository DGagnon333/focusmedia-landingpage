import RenderVideo from '@Videos/3DRendering.mp4'

function Rendering() {
  return (
    <div className='flex justify-center mx-auto '>
        <video src={RenderVideo} muted autoPlay playsInline loop/>
    </div>
  )
}

export default Rendering