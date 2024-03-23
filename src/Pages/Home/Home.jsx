
import Carousel from "../../Components/Carousel/Carousel";
import NavBar from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    return (
        <div className="bg-[#F2F2F6]">
            <NavBar/>
            <Carousel/>
            <div className="m-10 overflow-hidden">
                <Slider />
            </div>
        </div>
    );
};

export default Home;