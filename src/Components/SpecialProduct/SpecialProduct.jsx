import PdSlider from '../Slider/PdSlider';

const SpecialProduct = () => {
    return (
        <div className="mx-10 pb-10">
            <h3 className="font-['schoolbell'] text-center text-xl text-[#96AE00]">~ Special Products ~</h3>
            <h1 className="font-['Quicksand'] text-center text-3xl text-[#2D2A6E] font-bold mt-2 mb-3">Weekly Food Offers</h1>
            <p className="text-center text-xm">The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>
            <div className="mx-12 mt-8 overflow-hidden">
                <PdSlider/>
            </div>
        </div>
    );
};

export default SpecialProduct;