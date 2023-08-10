import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import {Link} from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  const goToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  //

  return (
    <div className='sticky top-0 z-50 w-full flex justify-between p-4 items-center bg-black'>
      <button className='border-0'>
        <h1 id="to-top-button" onClick={goToTop} className='text-white font-bold text-2xl z-20'>Focus Media</h1>
      </button>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
      <div
        className={nav ?
          'ease-in duration-200 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' :
          'absolute top-0 h-screen left-[100%] ease-in duration-200 z-10'}>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <Link to="/" className='font-bold text-2xl p-8'>Home</Link>
          <Link to="/Pricing" className='font-bold text-2xl p-8'>Pricings</Link>
          <li className='font-bold text-2xl p-8'>Contact</li>
          <Link to="/About" className='font-bold text-2xl p-8'>About</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
