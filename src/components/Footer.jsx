import Email from './Email'
import {FaInstagram, FaTiktok} from 'react-icons/fa'
import Logo from '@Images/Logo-ClearBackground.png'

function Footer() {
  return (
    <footer id='footer' className="bg-white dark:bg-gray-900 mt-12">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
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
                                <p className='text-bold'>Felix Renaux</p>
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
                                <a href="ia/" className="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@thisisfocusmedia" className="hover:underline">TikTok</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <h2 class="mb-6 text-sm font-semibold">Legal</h2>
                        <ul class="text-gray-500">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto" />
            <div className="sm:flex sm:items-center text-gray-500 sm:justify-between">
                <span className="text-sm sm:text-center">© 2023 <a href="#" className="hover:underline">ThisIsFocusMedia™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a href='https://www.instagram.com/thisisfocusmedia/' target='_blank'>
                        <FaInstagram size={30}/>
                    </a>
                    <a href='https://www.tiktok.com/@thisisfocusmedia' target='_blank'>
                        <FaTiktok size={30}/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer