import PricingCard from "../components/PricingCard";
import Logo from '@Images/logo.png';
import Image1 from '@Images/HighQuality/DSCF1709.jpg'

function Pricing(){
    const packagePhotos = [
      "15 photos edited of the exterior",
      "Quality: 48 Megapixels",
      "Multiple angles, heights, zoom, etc.",
      "One content review allowed",
      "Content delivered within 72 hours after capture",
  ]
    const packageVideos = [
      "15 Exterior Drone Photos",
      "Exterior video with minor editing",
      "Option to include your personal advertisement in the video/photos",
      "Photo Quality: 48 Megapixels | Video Quality: 4k at 60 frames per second",
      "One content review allowed",
      "Content delivered within 4 to 5 days after capture",
    ];
    const packagePro = [
      "25 exterior AND interior photos with drone and camera",
      "Video of the exterior AND interior with high-end editing",
      "Ability to add your personal ad to the video/photos",
      "48MP Photo Quality | 4k and 60 frames per second videos",
      "Content revision permitted",
      "Content delivered within 4-5 days after content capture",
    ];
    const packageFull = [
      "40 exterior and interior photos with drone and camera",
      "High-end drone video from outside AND inside",
      "Matterport 3D Virtual Tour for the entire property",
      "Creating an Intagram Reel and Tiktok for your social networks",
      "Format each photo and video to make them compatible with the platforms of your choice (Instagram, TikTok, Facebook, Realtor.ca, Centris, etc.)",
      "Ability to add your personal ad to the video/photos",
      "48MP Photo Quality | 4k and 60 frames per second videos",
      "Content revision permitted",
      "Content delivered within 4-5 days after content capture",
    ];
    return(
    <div>
      <div className='w-full px-20 flex flex-col align-middle lg:w-[50%] mx-auto'>
          <h1 className='font-bold text-6xl text-center pb-8'>Pricing</h1>
          <div className="flex flex-col items-center text-center text-xl">
              <img src={Logo} height={200} width={200} alt="focusmedia logo" className=" py-4" />
              <p className='py-12 border-b-2 border-t-2'>"<strong>Revolutionize</strong> the marketing strategies of <strong>real 
              estate agents</strong> through the <strong>implementation of innovative 
              photography</strong> and <strong>cutting-edge technological solutions</strong>."</p>
          </div>
        </div>
        <div className="text-center text-gray-400 italic text-lg pt-5">
          Please reach out to us and share your plans, allowing us to provide you with our pricing information.
        </div>
      <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-4 py-4">
        <PricingCard
          title="Package Pictures"
          // price="399$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={packagePhotos}
          />
          <PricingCard
          title="Package Pictures and Videos"
          // price="799$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={packageVideos}
          />
          <PricingCard
          title="Package Professional Production"
          // price="999$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={packagePro}
          />
          <PricingCard
          title="Full package"
          // price="1200$+tx"
          details="Details about Package 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          packageInfo={packageFull}
          />
      </div>
      <div className="flex items-center justify-center h-[900px] bg-center bg-cover bg-blur-xl" style={{ backgroundImage: `url(${Image1})` }}>
        <div className="p-8 backdrop-blur-3xl rounded-3xl shadow-md">
          <h1 className="text-4xl font-semibold mb-6">Optional Add-Ons</h1>
          <ul className="list-disc pl-6 mb-6">
            <li>Nighttime Exterior Photography: $175</li>
            <li>3D Matterport Tour: $375</li>
            <li>Additional Photos: 5 photos for $20</li>
            <li>Drone Video: $300</li>
            <li>3D Model: $699</li>
          </ul>

          <h1 className="text-4xl font-semibold mb-6">Interior Photography Packages</h1>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Classic Package</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>$225</li>
              <li>5 to 20 photos</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Premium Package</h2>
            <ul className="list-disc pl-6 mb-6">
              <p>$275</p>
              <p>21 to 40 photos</p>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Deluxe Package</h2>
            <ul className="list-disc pl-6 mb-6">
              <p>$315</p>
              <p>More than 40 photos</p>
            </ul>
          </div>

          <p className="mb-4">Travel fee of $50 applies for distances over 50km from Deux-Montagnes</p>
          <p>Taxes are not included in the prices</p>

          <p className="mt-6 text-lg">Have specific requests or only want a part of a package? Contact us, and we'll find a solution!</p>
          <p className="text-lg">If you have specific requests or only want a portion of a certain package, reach out to us!</p>
        </div>
      </div>

    </div>
    )
}

export default Pricing;
