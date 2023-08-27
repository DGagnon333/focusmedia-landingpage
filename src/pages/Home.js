import Hero from '../components/Hero.jsx';
import Slider from '../components/Slider.jsx';
import Products from '../components/Products.jsx';
import Conclusion from '../components/Conclusion.jsx'
// import MatterportTour from 'components/MatterportTour.jsx';

function Home(){
    return(
        <div>
            <Hero />
            <Products />
            {/* <MatterportTour /> */}
            <Slider />
            <Conclusion />
        </div>
    )
}

export default Home;
