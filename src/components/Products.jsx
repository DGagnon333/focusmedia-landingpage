import React from 'react'
import Logo from '@Images/logo.png'
import Fade from 'react-reveal/Fade'

function Products() {
  return (
    <div className="max-w-[1400px] m-auto p-4 flex flex-wrap content-center gap-4">
      <Fade left>
        {/*Content*/}
        <div className="rounded-lg mx-auto h-90 max-w-sm border-2 border-red-100 lg:basis-1/3">
          <img
            src={Logo}
            alt="focusmedia logo"
            className="w-full h-full m-auto px-4 relative"
          />
        </div>
        <div className="rounded-lg h-60 border-2 self-center border-red-100 lg:basis-2/3">
          <h2 id='dronePhotography' className="py-2 w-full text-center text-2xl text-bold">
            Drone Photography
          </h2>
          <p className='px-2 font-["Arial"]'>
            Discover a new dimension of real estate marketing through our drone
            photography services. Our expert photographers capture impressive
            aerial images that elevate your real estate listings to new heights.
            These captivating images offer potential buyers a breathtaking view
            of the property and its surroundings, highlighting the key features
            that set it apart from the rest.
          </p>
        </div>
      </Fade>

      <Fade right>
        {/*Content*/}
        <div className="rounded-lg h-64 border-2 border-red-100 self-center lg:basis-2/3">
          <h2 id='videography' className="py-2 w-full text-center text-2xl text-bold">
            Outdoor and indoor drone videography
          </h2>
          <p className='px-2 font-["Arial"]'>
            Dive into the future of real estate marketing with our
            state-of-the-art outdoor AND indoor drone videography services. Our
            expert drone videographers create visually stunning aerial videos
            that elevate your real estate listings to a whole new level. These
            captivating videos offer potential buyers a breathtaking bird's-eye
            view of the property and its surroundings, highlighting the
            distinctive features that set it apart from the competition.
          </p>
        </div>
        <div className="rounded-lg h-90 max-w-sm mx-auto  border-2 border-black-100 lg:basis-1/3">
          <img
            src={Logo}
            alt="focusmedia logo"
            className="w-full h-full m-auto px-4 relative"
          />
        </div>
      </Fade>

      <Fade left>
        {/*Content*/}
        <div className="rounded-lg mx-auto h-90 max-w-sm border-2 border-red-100 lg:basis-1/3">
          <img
            src={Logo}
            alt="focusmedia logo"
            className="w-full h-full m-auto px-4 relative"
          />
        </div>
        <div className="rounded-lg h-60 border-2 self-center border-red-100 lg:basis-2/3">
          <h2 id='matterport' className="py-2 w-full text-center text-2xl text-bold">
            Matterport 3D Virtual Tour
          </h2>
          <p className='px-2 font-["Arial"]'>
            Enter the field of cutting-edge real estate marketing with our
            immersive 3D virtual tour services. Our advanced technology creates
            realistic interactive experiences that transport potential buyers
            directly to the heart of your properties. These captivating tours
            allow shoppers to explore every corner, offering an unparalleled
            understanding of the space and its unique features.
          </p>
        </div>
      </Fade>

      <Fade right>
        {/*Content*/}
        <div className="rounded-lg h-64 border-2 border-red-100 self-center lg:basis-2/3">
          <h2 id='socialMedia' className="py-2 w-full text-center text-2xl text-bold">
            Social Media Content Creation
          </h2>
          <p className='px-2 font-["Arial"]'>
            Social media is essential for real estate agents as it allows them
            to connect with a wide audience, showcasing properties and their
            expertise in a visually appealing way. It's an essential tool for
            building brand awareness, fostering customer relationships, and
            inducing property inquiries in today's digital age. That's why we're
            able to create personalized videos for you to post on your social
            networks.
          </p>
        </div>
        <div className="rounded-lg h-90 max-w-sm mx-auto  border-2 border-black-100 lg:basis-1/3">
          <img
            src={Logo}
            alt="focusmedia logo"
            className="w-full h-full m-auto px-4 relative"
          />
        </div>
      </Fade>
    </div>
  );
}

export default Products