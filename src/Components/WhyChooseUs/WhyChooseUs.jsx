import ab1 from "../../assets/aboutUs/about-1.png";
import ab2 from "../../assets/aboutUs/about-2.png";
import ab3 from "../../assets/aboutUs/about-3.png";

const WhyChooseUs = () =>{
    return (
        <>
            <div className="WhyChooseUs">
                            {/*Why Choose Us */}
                            <h1 className="font-['schoolbell'] text-[22px] mt-[5%] text-[#96AE00] text-center">~ Why Choose Us ~</h1>
                            <h1 className="text-center text-[34px] text-[#2D2A6E] font-['Quicksand'] font-extrabold">Our Amazing Work</h1>
                            <p className="text-center text-[#2D2A6E] text-[18px] mt-3">The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>

                            <div className="images p-11 mt-[6%] flex justify-evenly gap-x-6 items-center">
                                <div className="one w-[50%]">
                                    <img src={ab1} alt="" className=""/>
                                </div>
                                <div className="two w-[50%]">
                                    <img src={ab2} alt="" className=""/>
                                </div>
                                <div className="three w-[50%]">
                                    <img src={ab3} alt="" className=""/>
                                </div>
                                
                            </div>

                            <div className="text p-11 mt-[2%] flex justify-evenly gap-x-6 items-center">
                                <div className="one w-[50%]">
                                    <h1 className="text-center text-[#2D2A6E] font-bold text-xl mb-2">Who We Are</h1>
                                    <p className="text-center text-[#2D2A6E]">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit, sed do eiusmod tempor labore
                                    et dolore dignissimos cumque.</p>
                                </div>
                                <div className="two w-[50%]">
                                    <h1 className="text-center text-[#2D2A6E] font-bold text-xl mb-2">How We Work</h1>
                                    <p className="text-center text-[#2D2A6E]">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit, sed do eiusmod tempor labore
                                    et dolore dignissimos cumque.</p>
                                </div>
                                <div className="three w-[50%]">
                                    <h1 className="text-center text-[#2D2A6E] font-bold text-xl mb-2">Our Products</h1>
                                    <p className="text-center text-[#2D2A6E]">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit, sed do eiusmod tempor labore
                                    et dolore dignissimos cumque.</p>
                                </div>
                                
                            </div>
                    </div>
        
        </>
    );
}

export default WhyChooseUs;