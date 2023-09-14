import PricingCard from "../components/PricingCard";
import Logo from "@Images/logo.png";
import Image1 from "@Images/HighQuality/DSCF1709.jpg";

function Pricing() {
  const packagePhotos = [
    "15 photos edited of the exterior",
    "Quality: 48 Megapixels",
    "Touch-ups included",
    "Multiple angles, heights, zoom, etc.",
    "One content review allowed",
    "Content delivered within 72 hours after capture",
  ];
  const packageVideos = [
    "25 interior AND exterior photos with drone",

    "Retouching included",

    "Exterior video with high-end editing",

    "Possibility of adding your personal advertising to the video/photos",

    "Photo quality 48 MP | Video 4k and 60 frames per second",

    "One content revision allowed",

    "Content delivered within 4-5 days of capture",
  ];
  const packagePro = [
    "35 exterior AND interior photos with drone and camera",
    "Video of exterior AND interior with high-end editing",
    "Possibility of adding your personal advertising to the video/photos",
    "Photo quality 48 MP | Video 4k and 60 frames per second",
    "One content revision allowed",
    "Content delivered within 4-5 days of capture",
  ];
  const packageFull = [
    "45 exterior and interior photos with drone and camera",
    "High-end drone video from outside AND inside",
    "Matterport 3D Virtual Tour for the entire property",
    "Creating an Intagram Reel and Tiktok for your social networks",
    "Format each photo and video to make them compatible with the platforms of your choice (Instagram, TikTok, Facebook, Realtor.ca, Centris, etc.)",
    "Ability to add your personal ad to the video/photos",
    "48MP Photo Quality | 4k and 60 frames per second videos",
    "Content revision permitted",
    "Content delivered within 4-5 days after content capture",
  ];
  return (
    <div>
      <div className="w-full px-20 flex flex-col align-middle lg:w-[50%] mx-auto">
        <h1 className="font-bold text-6xl text-center pb-8">Pricing</h1>
        <div className="flex flex-col items-center text-center text-xl">
          <img
            src={Logo}
            height={200}
            width={200}
            alt="focusmedia logo"
            className=" py-4"
          />
          <p className="py-12 border-b-2 border-t-2">
            "<strong>Revolutionize</strong> the marketing strategies of{" "}
            <strong>real estate agents</strong> through the{" "}
            <strong>implementation of innovative photography</strong> and{" "}
            <strong>cutting-edge technological solutions</strong>."
          </p>
        </div>
      </div>
      <div className="text-center text-gray-400 italic text-lg pt-5">
        Please reach out to us and share your plans, allowing us to provide you
        with our pricing information.
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
      <div
        className="flex items-center justify-center h-[900px] bg-center bg-cover bg-blur-xl"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="p-8 backdrop-blur-3xl rounded-3xl shadow-md">
          <h1 className="text-4xl font-semibold mb-6">Optional Add-Ons</h1>
          <ul className="list-disc pl-6 mb-6 text-white">
            <li>Night photography from the outside</li>
            <li>Matterport 3D tour</li>
            <li>Additional photos</li>
            <li>Video with drone</li>
            <li>3D model</li>
          </ul>

          <p className="text-center font-semibold text-white mt-6">
            If you have some specific requests or just want a portion of a
            certain package, contact us and we will work something out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
