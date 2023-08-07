import Hero from '../components/Hero.jsx';
import Offers from '../components/Offers.jsx';
import Plan from '../components/Plan.jsx';
import Indoor from '../components/Indoor.jsx';
import Slider from '../components/Slider.jsx';
import Pricing from 'components/Pricing.jsx';

function Home(){
    return(
        <div>
            <Hero />
            <Offers />
            <Plan />
            <Pricing />
            <Indoor />
            <Slider />
        </div>
    )
}

export default Home;
