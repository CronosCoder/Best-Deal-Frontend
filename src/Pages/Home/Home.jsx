import Carousel from "../../Components/Carousel/Carousel";
import NavBar from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";
import SpecialProduct from "../../Components/SpecialProduct/SpecialProduct";
import BestForYou from "../../Components/BestForYou/BestForYou";
import Footer from "../../Components/Footer/Footer";




const Home = () => {
    return (
        <div className="bg-[#F2F2F6]">
            <NavBar/>
            <Carousel/>
            <div className="m-10 overflow-hidden">
                <Slider />
            </div>
            <SpecialProduct/>
            <BestForYou/>
            <Footer/>
        </div>
    );
};

export default Home;