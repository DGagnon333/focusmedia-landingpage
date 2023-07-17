import React from 'react'
import Indoor1 from "@Images/indoor1.jpg";
import Indoor2 from "@Images/indoor2.jpg";
import Indoor3 from "@Images/indoor3.jpg";
import Indoor4 from "@Images/indoor4.jpg";
import Indoor5 from "@Images/indoor5.jpg";

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*left side*/}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={Indoor1} alt="indoor of house 1"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={Indoor2} alt="indoor of house 2"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={Indoor3} alt="indoor of house 3"/>
            <img className='row-span-3 object-cover w-full h-full p-2' src={Indoor4} alt="indoor of house 4"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={Indoor5} alt="indoor of house 5"/>
        </div>
        {/*right side*/}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Our Next Visit</h3>
            <p className='text-2xl py-6'>Sunt est ut velit laborum excepteur aliqua cillum sunt amet veniam.</p>
            <p className='pb-6'>Enim qui irure id veniam id amet eiusmod est Lorem nisi nisi nisi do.</p>
        </div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='bg-black text-white mr-4 border-black hover:shadow-xl'>Book a Visit</button>
    </div>
  )
}

export default Plan