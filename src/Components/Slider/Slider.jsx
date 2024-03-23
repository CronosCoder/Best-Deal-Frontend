import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import vegetableImg from "../../assets/cate-vegetable.jpg"
import fruitImg from "../../assets/cate-fruits.jpg"
import drinkImg from "../../assets/cate-drink.jpg"
import bakeryImg from "../../assets/cate-bakery.jpg"
import buiscuitImg from "../../assets/cate-buiscuit.jpg"
import meatImg from "../../assets/cate-meat.jpg"
import milkImg from "../../assets/cate-milk.jpg"
import seaImg from "../../assets/cate-sea.jpg"

const Slider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 6,
            spacing: 15,
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider mt-5 mx-12 pb-10">
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={vegetableImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Vegetables</h1>
                <p className="text-xs mb-10 mt-2">06 items</p>
            </div>
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={fruitImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Fresh Fruits</h1>
                <p className="text-xs mb-10 mt-2">05 items</p>
            </div>
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={drinkImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Fruit Drinks</h1>
                <p className="text-xs mb-10 mt-2">08 items</p>
            </div>
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={bakeryImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Fresh Bakery</h1>
                <p className="text-xs mb-10 mt-2">09 items</p>
            </div>
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={buiscuitImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Biscuits Snack</h1>
                <p className="text-xs mb-10 mt-2">09 items</p>
            </div>
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={meatImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Fresh Meat</h1>
                <p className="text-xs mb-10 mt-2">09 items</p>
            </div>
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={milkImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Fresh Milk</h1>
                <p className="text-xs mb-10 mt-2">09 items</p>
            </div>
            <div className="keen-slider__slide w-[100px] bg-white rounded-md flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden mt-10">
                    <img className="" src={seaImg} alt="this is a card image" />
                </div>
                <h1 className="text-[#2D2A6E] hover:text-[#96AE00] font-semibold text-xl mt-3">Sea Foods</h1>
                <p className="text-xs mb-10 mt-2">09 items</p>
            </div>
            
        </div>
    );
};

export default Slider;