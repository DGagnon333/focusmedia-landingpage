import React from 'react'
import Outdoor6 from '@Images/outdoor6.jpg';
import Outdoor7 from '@Images/outdoor7.jpg';
import Indoor6 from '@Images/indoor6.jpg';
import Indoor3 from '@Images/indoor3.jpg';

function Indoor() {
  return (
    <div className='h-[1000px] lg:h-[800px]'>
        <div className='max-w-[1400px] h-[500px] bg-gray-400 mx-auto my-20 pt-26 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h2 className='text-2xl font-bold'>
                    Get In Touch
                </h2>
                <p className='pt-4'>
                Ready to elevate your property marketing to new heights?
                Contact us today to discuss your requirements and receive
                a personalized quote. Our team is eager to assist you in
                bringing your vision to life.
                </p>
            </div>

            <div className='grid pt-2 grid-cols-2 col-span-2 gap-2'>
                <img className='row-span-2 object-cover w-full h-[350px]' src={Outdoor6} alt='indoor of house'/>
                <img className='row-span-2 object-cover w-full h-[350px]' src={Outdoor7} alt='indoor of house'/>
                <img className='row-span-2 object-cover w-full h-[350px]' src={Indoor6} alt='indoor of house'/>
                <img className='row-span-2 object-cover w-full h-[350px]' src={Indoor3} alt='indoor of house'/>
            </div>
        </div>
    </div>
  )
}

export default Indoor