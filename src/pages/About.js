import Logo from '../images/logo.png'

function About(){
    return (
        <div className='w-full px-20'>
            <h1 className='font-bold text-4xl text-center'>About Us</h1>
            <div className='flex flex-col items-center'>
                <img src={Logo} height={200} width={200} />
            </div>
            <h2 className='font-bold text-2xl text-gray-800 pb-5'>Our Mission</h2>
            <div className='text-center'>
                <p className='py-2'>"<strong>Revolutionize</strong> the marketing strategies of <strong>real 
                estate agents</strong> through the implementation of <strong>innovative 
                photography</strong> and <strong>cutting-edge technological solutions</strong>."</p>
                <p className='py-2'>"Notre objectif principal est de révolutionner complètement 
                les stratégies marketing des agents immobiliers grâce à la mise
                    en œuvre d'une photographie innovante et de solutions technologiques 
                    de pointe."</p>
                <br/>
            </div>
                <h2 className='font-bold text-2xl text-gray-800 pb-5'>Our Vision</h2>
                <div className="flex flex-col items-center text-base">
                <p className='py-2'>FocusMedia, a company that wishes to change the way 
                we capture content for real estate agents. We want to 
                bring more quality, perspectives and attention to detail.</p>
                <p className='py-2'>
                Our first year will be the time where we introduce ourselves 
                to the whole market of real estate agents from the North Shore
                of Montreal to the South Shore of Montreal. Our goal for that
                year is to build our reputation through 50 realtors in the region.
                This will give us a good number of testimonials to prove our services
                to other agents. This will also be the time where we set the 
                foundation of all the systems of the company.
                </p>
                </div>
        </div>
    )
}

export default About;