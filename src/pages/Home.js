import Hero from '../components/Hero.jsx';
import Offers from '../components/Offers.jsx';
import Plan from '../components/Plan.jsx';
import Indoor from '../components/Indoor.jsx';
import Slider from '../components/Slider.jsx';

function Home(){
    return(
        <div>
            <Hero />
            <Offers />
            <Plan />
            <Indoor />
            <Slider />
        </div>
    )
}

export default Home;
