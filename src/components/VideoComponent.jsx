import LongVideo from '@Videos/FocusMedia_Kick_off_v2.mp4'
import AlternativeImage from '@Images/VintageHouse/DJI_0384.jpg'

const VideoLoop = () => {
  return (
    <div>
      <video loop autoPlay muted className="w-auto 
            min-w-full min-h-full max-w-none">
        <source src={LongVideo} type="video/mp4" />
        Your browser does not support the video tag.
        <img src={AlternativeImage} alt="Fallback" />
      </video>
    </div>
  );
};

export default VideoLoop;