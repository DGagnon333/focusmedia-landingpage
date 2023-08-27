import React from 'react'
import Render from '../components/Rendering'

function Matterpost() {
  return (
    <div>
        <div className='w-full px-20'>
            <h1 className='font-bold text-2xl text-center'>Elevate Your Home Experience and embrace the Power of 3D Visualization!</h1>
            <div className='text-center py-12  w-[50%] self-center mx-auto'>
                <p className='py-2 text-xl'>With a 3D render, you can truly understand how your home 
                design will look and feel. It's like stepping into your future home before it's even 
                built, giving you a clear picture of the layout and design.</p>
                <br/>
            </div>
            <div className='pb-12'>
              <Render />
            </div>
            <h1 className='font-bold text-2xl text-center'>Immerse Yourself with Matterpost</h1>
            <div className='text-center py-12  w-[50%] self-center mx-auto'>
                <p className='py-2 text-xl'>With Matterpost's 3D tours, you're not just looking at 
                a house, you're stepping inside it! Experience the layout, ambiance, and flow as if 
                you were already there.</p>
                <p className='py-2 text-xl'>
                Our 3D tours capture every detail, from the textures on the walls to the sunlight streaming 
                through the windows. It's a true-to-life representation that lets you see the house in all its glory.
                </p>
                <br/>
            </div>
        </div>
    </div>
  )
}

export default Matterpost