
import Carousel from "../../Components/Carousel/Carousel";
import NavBar from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";
import SpecialCategory from "../../Components/SpecialCategory/SpecialCategory";
import SpecialProduct from "../../Components/SpecialProduct/SpecialProduct";

const Home = () => {
    return (
        <div className="bg-[#F2F2F6]">
            <NavBar/>
            <Carousel/>
            <div className="m-10 overflow-hidden">
                <Slider />
            </div>
            <SpecialProduct/>
            <SpecialCategory/>
        </div>
    );
};

export default Home;