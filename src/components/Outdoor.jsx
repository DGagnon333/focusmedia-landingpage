import React from 'react'
import Outdoor1 from '@Images/outdoor1.jpg'
import Outdoor2 from '@Images/outdoor2.jpg'
import Outdoor3 from '@Images/outdoor3.jpg'
import Outdoor4 from '@Images/outdoor4.jpg'
import Outdoor5 from '@Images/outdoor5.jpg'

function Outdoor() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*left side*/}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={Outdoor1} alt="outdoor of house 1"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={Outdoor2} alt="outdoor of house 2"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={Outdoor3} alt="outdoor of house 3"/>
            <img className='row-span-3 object-cover w-full h-full p-2' src={Outdoor4} alt="outdoor of house 4"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={Outdoor5} alt="outdoor of house 5"/>
        </div>
        {/*right side*/}
        <div className='flex flex-col h-full justify-center'>
            <h2 className='text-5xl md:text-6xl font-bold'>Dynamic Outdoor Shots</h2>
            <p className='text-1xl py-6'>Anim incididunt dolore dolor qui fugiat do consequat incididunt ipsum irure Lorem minim
            amet irure. Deserunt nisi exercitation nulla Lorem labore do sit labore ea deserunt. 
            Nisi eiusmod exercitation quis occaecat cupidatat reprehenderit Lorem.</p>
        </div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='bg-black text-white mr-4 border-black hover:shadow-xl'>Book a Visit</button>
    </div>
  )
}

export default Outdoor