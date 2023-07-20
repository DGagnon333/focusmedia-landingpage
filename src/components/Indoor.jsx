import React from 'react'
import Indoor4 from '@Images/indoor4.jpg';
import Indoor5 from '@Images/indoor5.jpg';
import Indoor6 from '@Images/indoor6.jpg';

function Indoor() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-gray-400 mx-auto my-20 pt-26 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>
                Great Photos
            </h3>
            <p className='pt-4'>
                Commodo voluptate voluptate fugiat fugiat do magna culpa qui eiusmod nostrud sit laboris. Pariatur esse ut dolor 
                est est proident velit laborum voluptate dolor. Irure ut culpa enim eiusmod. Ut deserunt velit ea laboris sunt 
                velit minim. Est anim quis officia dolor eu minim in ea sunt voluptate. Eiusmod eu amet sint laboris commodo 
                cillum anim pariatur voluptate nulla.
            </p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='row-span-2 object-cover w-full h-full' src={Indoor4} alt='indoor of house'/>
            <img className='row-span-2 object-cover w-full h-full' src={Indoor5} alt='indoor of house'/>
            <img className='row-span-2 object-cover w-full h-full' src={Indoor6} alt='indoor of house'/>
        </div>
    </div>
  )
}

export default Indoor