import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Footer from '../Components/Footer';
import PopularItems from '../Components/PopularItems';

function Home(){
    return (
        <>
            <Navbar />
            <HeroSection />
            <PopularItems />
            <Footer />
        </>
    )
}

export default Home;