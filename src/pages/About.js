import Logo from '../images/logo.png'

function About(){
    return (
        <div className='w-full px-20'>
            <h1 className='font-bold text-4xl text-center'>About Us</h1>
            <div className='flex flex-col items-center'>
                <img src={Logo} height={200} width={200} alt='focusmedia logo' />
            </div>
            <h2 className='font-bold text-2xl text-gray-800 pb-5'>Our Mission</h2>
            <div className='text-center py-12 border-b-2 border-t-2 lg:w-[75%] self-center mx-auto'>
                <p className='py-2 text-lg'>"<strong>Revolutionize</strong> the marketing strategies of <strong>real 
                estate agents</strong> through the implementation of <strong>innovative 
                photography</strong> and <strong>cutting-edge technological solutions</strong>."</p>
                <p className='py-2 text-lg'>"Notre objectif principal est de révolutionner complètement 
                les stratégies marketing des agents immobiliers grâce à la mise
                    en œuvre d'une photographie innovante et de solutions technologiques 
                    de pointe."</p>
                <br/>
            </div>
                <h2 className='font-bold text-2xl text-gray-800 pb-5'>Our Vision</h2>
                <div className="text-center py-12 border-b-2 border-t-2 lg:w-[75%] self-center mx-auto">
                <p className='py-2 text-lg'>FocusMedia, a company that wishes to change the way 
                we capture content for real estate agents. We want to 
                bring more quality, perspectives and attention to detail.</p>
                </div>
        </div>
    )
}

export default About;