import Email from './Email'
import {FaInstagram, FaTiktok} from 'react-icons/fa'
import Logo from '@Images/Logo-ClearBackground.png'
import CalendlyLogo from '@Images/CalendlyLogo.png'

function Footer() {
  return (
    <footer id='footer' className="bg-white dark:bg-gray-900 mt-12">
        <div className="mx-auto w-full max-w-screen-xl p-4 pb-12 lg:pb-2">
            <div className="md:flex md:justify-between text-gray-500 dark:text-gray-400 font-medium">
                <div className="mb-6 md:mb-0">
                    <Email />
                </div>
                <img src={Logo} alt='focus media logo' className='h-[100px] w-[100px]' />
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold">Information</h2>
                        <ul>
                            <li className="mb-4">
                                <p className='text-bold'>Felix Renaud</p>
                            </li>
                            <li>
                                <a href="tel:514-979-0003" className="hover:underline">514-979-0003</a>
                            </li>
                            <li>
                                <a href="mailto:info@thisisfocusmedia.com" className="hover:underline">info@thisisfocusmedia.com</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold">Follow us</h2>
                        <ul className="text-gray-500">
                            <li className="mb-4">
                                <a href="https://www.instagram.com/thisisfocusmedia/" className="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@thisisfocusmedia" className="hover:underline">TikTok</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto" />
            <div className="flex flex-wrap align-center text-gray-500 justify-between h-[50px]">
                <span className="text-sm sm:text-center">© 2023 ThisIsFocusMedia™. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a href='https://www.instagram.com/thisisfocusmedia/' rel="noreferrer" target='_blank'  className='flex items-center' >
                        <FaInstagram size={30}/>
                    </a>
                    <a href='https://www.tiktok.com/@thisisfocusmedia' rel="noreferrer" target='_blank'  className='flex items-center' >
                        <FaTiktok size={30}/>
                    </a>
                    <a href='https://calendly.com/thisisfocusmedia/appel-one-on-one' rel="noreferrer" target='_blank' className='h-[30px] w-[100px]'>
                        <img src={CalendlyLogo} alt='Calendly' />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer