import choose1 from '../../assets/aboutUs/choose-icon1.svg';
import choose2 from '../../assets/aboutUs/choose-icon2.svg';
import choose3 from '../../assets/aboutUs/choose-icon3.svg';
import choose4 from '../../assets/aboutUs/choose-icon4.svg';

const WhatMakesUsDifferent = () =>{
    return (
        <>
         <div className="WhatMakesUsDifferent bg-[#F2F2F6] p-3">
            {/* Main Container */}
            <h1 className="font-['schoolbell'] text-[22px] mt-[5%] text-[#96AE00] text-center">~ Why Choose Us ~</h1>
            <h1 className="text-[34px] text-[#2D2A6E] font-['Quicksand'] font-bold mb-2 text-center">What makes us different</h1>
            <p className="text-[#2D2A6E] text-center">The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>

            <div className="icons flex px-7 gap-9 justify-around items-center mt-[5%]">
                 <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                    <img src={choose1} alt="" className="mb-3 hover:animate-bounce transition-transform duration-300"/>
                    <h1 className="text-[#2D2A6E] font-semibold">100% Fresh Food</h1>
                    <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                    <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                </div>
                <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                    <img src={choose2} alt="" className="mb-3 hover:animate-bounce transition-transform duration-300" />
                    <h1 className="text-[#2D2A6E] font-semibold">Premium Quality</h1>
                    <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                    <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                </div>
                <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                    <img src={choose3} alt="" className="mb-3 hover:animate-bounce transition-transform duration-300" />
                    <h1 className="text-[#2D2A6E] font-semibold">100% Natural</h1>
                    <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                    <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                </div>
                <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                    <img src={choose4} alt="" className="mb-3 hover:animate-bounce transition-transform duration-300" />
                    <h1 className="text-[#2D2A6E] font-semibold">100% Organic Goods</h1>
                    <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                    <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                </div>
            </div>
    </div>
        </>
    );
}


export default WhatMakesUsDifferent;