import PricingCard from "../components/PricingCard";
import Logo from '../images/logo.png';

function Pricing(){
    const packagePhotos = [
      "15 photos edited of the exterior",
      "4K quality",
      "Multiple angles, heights, zoom, etc.",
      "1 revision allowed for photos",
      "Files delivered within 24 hours after capturing the content",
  ]
    const packageVideos = [
      "15 photos edited of the exterior",
      "Video of the exterior of the property with light editing",
      "Option to add personal advertising to videos/photos",
      "4K quality and 60 FPS",
      "2 revisions allowed for photos/videos",
      "Files delivered within 48 hours after capturing the content",
    ];
    const packagePro = [
      "20 photos edited of the exterior",
      "Highly edited video of the exterior AND interior of the property",
      "Option to add personal advertising to videos/photos",
      "4K quality and 60 FPS",
      "3 revisions allowed for photos/videos",
      "Files delivered within 48 hours after capturing the content",
    ];
    const pakcageFull = [
      "40 photos edited of the exterior and interior",
      "Drone video of the exterior AND interior of the property, highly edited",
      "Creation of an Instagram Reel and TikTok for your social media",
      "Formatting each photo and video to be suitable for each platform of your choice (Instagram, TikTok, Facebook, Realtor, Centris, etc.)",
      "Option to add personal advertising to videos/photos",
      "4K quality and 60 FPS",
      "3 revisions allowed for photos/videos",
      "Files delivered within 48 hours after capturing the content",

    ];
    return(
    <div>
      <div className='w-full px-20 flex flex-col align-middle'>
            <h1 className='font-bold text-6xl text-center pb-8'>Pricing</h1>
            <div className="flex flex-col items-center text-base">
                <img src={Logo} height={200} width={200} alt="focusmedia logo" />
                <p className='py-2'>"<strong>Revolutionize</strong> the marketing strategies of <strong>real 
                estate agents</strong> through the <strong>implementation of innovative 
                photography</strong> and <strong>cutting-edge technological solutions</strong>."</p>
                <p className='py-2'>"Notre objectif principal est de révolutionner complètement 
                les stratégies marketing des agents immobiliers grâce à la mise
                 en œuvre d'une photographie innovante et de solutions technologiques 
                 de pointe."</p>
            </div>
        </div>
      <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-4">
        <PricingCard
          title="Package Photos Drone"
          price="399$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={packagePhotos}
          />
          <PricingCard
          title="Package Photos et Vidéos Drone"
          price="799$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={packageVideos}
          />
          <PricingCard
          title="Package Production Professionnel par Drone"
          price="999$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={packagePro}
          />
          <PricingCard
          title="Full package"
          price="1200$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={pakcageFull}
          />
      </div>
      <div className="h-40 py-2 mx-2 flex align-center">
        <div className="w-full border-black border-gray-500 border-2 rounded-2xl"></div>
      </div>
      <div className="p-4"></div>
      <div className="h-40 py-2 mx-2 flex align-center">
        <div className="w-full border-black border-gray-500 border-2 rounded-2xl"></div>
      </div>
      <div className="p-4"></div>

      <div className="h-40 py-2 mx-2 flex align-center">
        <div className="w-full border-black border-gray-500 border-2 rounded-2xl"></div>
      </div>
      <div className="p-4"></div>

      <div className="h-40 py-2 mx-2 flex align-center">
        <div className="w-full border-black border-gray-500 border-2 rounded-2xl"></div>
      </div>
    </div>
    )
}

export default Pricing;
