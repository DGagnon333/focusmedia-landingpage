import Email from './Email'
import {FaInstagram, FaTiktok} from 'react-icons/fa'

function Footer() {
  return (
    <div id='footer' className='w-full mt-24 bg-gray-900 text-gray-300 p-2'>
        <div className='max-2-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 p-4'>
            {/*}
            <div>
                <h6 className='font-bold uppecase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Indoor</li>
                    <li className='py-1'>Outdoor</li>
                    <li className='py-1'>Drone Shots</li>
                    <li className='py-1'>Edited Videos</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div>

                <h6 className='font-bold uppecase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Estimations</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppecase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Other Projects</li>
                </ul>
            </div>
            {*/}
            <div className='flex items-center col-span-2 py-8 md:pt-2'>
                <Email />
            </div>
        </div>

        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2023 FocusMedia, All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <a href='https://www.instagram.com/thisisfocusmedia/' target='_blank'>
                    <FaInstagram size={30}/>
                </a>
                <a href='https://www.tiktok.com/@thisisfocusmedia' target='_blank'>
                    <FaTiktok size={30}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer