import Logo from '../images/logo.png'

function About(){
    return (
        <div className='w-full px-20'>
            <h1 className='font-bold text-4xl text-center'>About Us</h1>
            <div className='flex flex-col items-center'>
                <img src={Logo} height={200} width={200} alt='focusmedia logo' />
            </div>
            <h2 className='font-bold text-2xl text-gray-800 py-5 text-center'>Our Mission</h2>
            <div className='text-center pt-5 pb-12 border-t-2 lg:w-[75%] self-center mx-auto'>
                <p className='py-2 text-lg'>"
                <strong>Revolutionize</strong> the marketing strategies of <strong>real 
                estate agents</strong> through the implementation of <strong>innovative 
                photography</strong> and <strong>cutting-edge technological solutions</strong>."
                </p>
            </div>
                <h2 className='font-bold text-2xl text-gray-800 py-5 text-center'>Our Vision</h2>
                <div className="text-center pt-5 pb-12 border-t-2 lg:w-[75%] self-center mx-auto">
                    <p className='py-2 text-lg'>
                    FocusMedia, a company that wishes to change the way 
                    we capture content for real estate agents. We want to 
                    bring more quality, perspectives and attention to detail.
                    </p>
                </div>
        </div>
    )
}

export default About;