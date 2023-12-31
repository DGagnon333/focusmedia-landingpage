import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import {useNavigate} from "react-router-dom";
import ClearLogo from '@Images/HorizontalClearLogo.png'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }
  
  const navigate = useNavigate();
  // When the user clicks on the button, scroll to the top of the document
  const goToTop = () => {
    if (window.location.pathname === "/" || window.location.pathname === "/Home"){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else{
      navigate('/');
    }
  }

  return (
    <div className='sticky top-0 z-50 w-full flex justify-between items-center bg-black'>
      <button className='border-0'>
        <img id="to-top-button" src={ClearLogo} alt='Focus Media' onClick={goToTop}  className='max-h-[50px] relative z-20' />
      </button>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={30} />
      <div
        className={nav ?
          'ease-in duration-200 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col z-10' :
          'absolute top-0 h-screen left-[100%] ease-in duration-0 z-10'}>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li>
            <button onClick={()=>{ setNav(false); navigate("/")}} className='font-bold text-2xl p-8 border-0'>
              Home
            </button>
          </li>
          <li>
            <button onClick={()=>{ setNav(false); navigate("/Pricing")}} className='font-bold text-2xl p-8 border-0'>
              Pricing
            </button>
          </li>
          {/* <li>
            <button onClick={()=>{ setNav(false); navigate("/Contact")}} className='font-bold text-2xl p-8 border-0'>
              Contact
            </button>
          </li> */}
          {/* <li>
            <button onClick={()=>{ setNav(false); navigate("/AerialPhotos")}} className='font-bold text-2xl p-8 border-0'>
              Aerial Photos
            </button>
          </li> */}
          <li>
          <button onClick={()=>{ setNav(false); navigate("/AugmentedTour")}} className='font-bold text-2xl p-8 border-0'>
            3D Tour
            </button>
          </li>
          <li>
            <button onClick={()=>{ setNav(false); navigate("/About")}} className='font-bold text-2xl p-8 border-0'>
              About
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
