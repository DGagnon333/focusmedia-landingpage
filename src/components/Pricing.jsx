import PricingCard from "./PricingCard";

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
    )
}

export default Pricing;
