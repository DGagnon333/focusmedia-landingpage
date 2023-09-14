import Fade from 'react-reveal/Fade'
import ProductsDrone from '@Images/products-drone.jpeg'
import ProductsIndoor from '@Images/products-indoor.jpeg'
import Products360 from '@Images/products-360.jpeg'
import ProductsSocial from '@Images/products-social.jpeg'
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="max-w-[1400px] m-auto p-4 flex flex-wrap content-center gap-4">
      <Fade left>
        {/*Content*/}
        <div className="rounded-lg shadow-lg self-center lg:basis-2/3  order-2">
          <h2 id='dronePhotography' className="py-2 w-full text-center text-2xl text-bold">
            Drone Photography
          </h2>
          <p className='p-4 text-gray-700 text-xl'>
            Discover a new dimension of real estate marketing through our drone
            photography services. Our expert photographers capture impressive
            aerial images that elevate your real estate listings to new heights.
            These captivating images offer potential buyers a breathtaking view
            of the property and its surroundings, highlighting the key features
            that set it apart from the rest.
          </p>
        </div>
        <div className="mx-auto max-h-sm max-w-sm shadow-lg rounded-lg overflow-hidden lg:basis-1/3 order-1">
          <img
            src={ProductsDrone}
            alt="focusmedia logo"
            className="w-full relative"
          />
        </div>
      </Fade>

      <Fade right>
        {/*Content*/}
        <div className="mx-auto max-h-sm max-w-sm shadow-lg rounded-lg overflow-hidden lg:basis-1/3 order-4">
          <img
            src={ProductsIndoor}
            alt="focusmedia logo"
            className="w-full relative"
          />
        </div>
        <div className="rounded-lg shadow-lg self-center lg:basis-2/3  order-3">
          <h2 id='videography' className="py-2 w-full text-center text-2xl text-bold">
            Outdoor and indoor drone videography
          </h2>
          <p className='p-4 text-gray-700 text-xl'>
            Dive into the future of real estate marketing with our
            state-of-the-art outdoor <strong>AND</strong> indoor drone videography services. Our
            expert drone videographers create visually stunning aerial videos
            that elevate your real estate listings to a whole new level. These
            captivating videos offer potential buyers a breathtaking bird's-eye
            view of the property and its surroundings, highlighting the
            distinctive features that set it apart from the competition.
          </p>
        </div>
      </Fade>

      <Fade left>
        {/*Content*/}
        <div className="mx-auto max-h-sm max-w-sm shadow-lg rounded-lg overflow-hidden lg:basis-1/3 order-5">
          <img
            src={Products360}
            alt="focusmedia logo"
            className="w-full h-full relative"
          />
        </div>
        <div className="rounded-lg shadow-lg self-center lg:basis-2/3 order-6">
          <h2 id='matterport' className="py-2 w-full text-center text-2xl text-bold">
            Matterport 3D Virtual Tour
          </h2>
          <p className='p-4 text-gray-700 text-xl'>
            Enter the field of cutting-edge real estate marketing with our
            immersive 3D virtual tour services. Our advanced technology creates
            realistic interactive experiences that transport potential buyers
            directly to the heart of your properties. These captivating tours
            allow shoppers to explore every corner, offering an unparalleled
            understanding of the space and its unique features.
          </p>
          <Link to="/AugmentedTour" className='flex justify-center mx-auto pb-2'>
            <button>Check it Out!</button>
          </Link>
        </div>
      </Fade>

      <Fade right>
        <div className="mx-auto max-h-sm max-w-sm shadow-lg rounded-lg overflow-hidden lg:basis-1/3 order-8">
          <img
            src={ProductsSocial}
            alt="focusmedia logo"
            className="w-full h-full relative"
          />
        </div>
        {/*Content*/}
        <div className="rounded-lg shadow-lg self-center lg:basis-2/3 order-7">
          <h2 id='socialMedia' className="py-2 w-full text-center text-2xl text-bold">
            Social Media Content Creation
          </h2>
          <p className='p-4 text-gray-700 text-xl'>
            Social media is essential for real estate agents as it allows them
            to connect with a wide audience, showcasing properties and their
            expertise in a visually appealing way. It's an essential tool for
            building brand awareness, fostering customer relationships, and
            inducing property inquiries in today's digital age. That's why we're
            able to create personalized videos for you to post on your social
            networks.
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default Products