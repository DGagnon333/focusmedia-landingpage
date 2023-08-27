import React from 'react'
import Indoor1 from "@Images/HighQuality/DSCF1736.jpg";
import Indoor2 from "@Images/HighQuality/DSCF1742.jpg";
import Indoor3 from "@Images/HighQuality/DSCF1746.jpg";
import Indoor4 from "@Images/HighQuality/DSCF1738.jpg";
import Indoor5 from "@Images/HighQuality/DSCF1748.jpg";

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
    </div>
  )
}

export default Plan