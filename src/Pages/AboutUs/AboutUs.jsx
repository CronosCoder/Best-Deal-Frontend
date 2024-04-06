import NavBar from "../../Components/NavBar/NavBar";
import "./css/about-us.css";
import bgOne from "./assets/bg3.png";
import about1 from "./assets/about-svg1.svg";
import about2 from "./assets/about-svg2.svg";
import about3 from "./assets/about-svg3.svg";

import ab1 from "./assets/about-1.png";
import ab2 from "./assets/about-2.png";
import ab3 from "./assets/about-3.png";


import choose1 from './assets/choose-icon1.svg';
import choose2 from './assets/choose-icon2.svg';
import choose3 from './assets/choose-icon3.svg';
import choose4 from './assets/choose-icon4.svg';
 

import { FaRegHandPointRight } from "react-icons/fa6";





const AboutUs = () => {
    return (
        <>
            <NavBar/>
            <div className="about mt-[6%] h-[80vh] flex justify-center items-center flex-col mb-7" >
                {/* first section */}
                    <h1 className="capitalize text-white text-[20px] font-semibold">About for Best deal</h1>
                    <h1 className="text-white font-bold text-[65px] font-['Quicksand']">Uniq Pepole</h1>
                    <p className="text-white font-['Quicksand']">Over 25 years of experience, we have crafted thousands of strategic discovery process that</p>
                    <p className="text-white font-['Quicksand']">enables us to peel back the layers which enable us to understand, connect.</p>
            </div>

            <div className="flex justify-center items-center">
                {/* Main section */}
                <div className="image ml-[10%]">
                    {/* image section */}
                    <img src={bgOne} alt=""  className="w-[60%]"/>
                </div>


                <div className="text w-1/2">
                    {/* text section */}
                    <div className="Headline flex gap-4 mb-2">
                        <h1 className="py-1 px-2 rounded-full bg-[#96AE00] text-white text-xl">About Us</h1>
                        <h1 className="py-1 px-2">Wellcome to <span className="text-[#390279] font-['Style_Script'] text-xl"> Best Deal</span></h1>
                    </div>
                    <h1 className="text-[40px] text-[#2D2A6E] font-['Quicksand'] font-bold mb-2">We Help Your <br /> Digital Business Grow</h1>

                    <p className="mb-5">We provide digital experience services to startups and small businesses. We help our
                    clients succeed by creating brand identities, digital experiences, and print materials. Sed
                    trspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>

                    <div className="flex flex-col gap-y-3">
                        {/* main Icons sections */}
                        <div className="icons flex gap-4">
                            <FaRegHandPointRight className="mt-1 p-2 bg-[#96AE00] rounded-full text-white"/>
                            <h1>Track your daily activity.</h1>
                        </div>
                        <div className="icons flex gap-4">
                            <FaRegHandPointRight className="mt-1 p-2 bg-[#96AE00] rounded-full text-white"/>
                            <h1>Start a private group video call.</h1>
                        </div>
                        <div className="icons flex gap-4">
                            <FaRegHandPointRight className="mt-1 p-2 bg-[#96AE00] rounded-full text-white"/>
                            <h1>All the lorem ipsum generators on the Internet.</h1>
                        </div>
                    </div>
                </div>

            </div>


            <div className="p-3 flex justify-around items-center mt-[8%] h-[50vh]">
                        {/*Another section*/}
                        <div className="flex flex-col items-center justify-center">
                            <img src={about1} alt="" className="mb-4 hover:animate-bounce duration-300"/>
                            <h1>Select Your Products</h1>
                            <p>Choose from select produce to start. </p>
                            <p>Keep, add, or remove items.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <img src={about2} alt="" className="mb-4 hover:animate-bounce duration-300"/>
                            <h1>Our Shop Best Deal</h1>
                            <p>We provide 100+ products, provide </p>
                            <p>enough nutrition for your family..</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <img src={about3} alt="" className="mb-4 hover:animate-bounce duration-300"/>
                            <h1>Delivery To Your</h1>
                            <p>Delivery to your door. Up to 100km</p>
                            <p>and it is completely free.</p>
                        </div>

                        

                    </div>

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

                    <div className="WhatMakesUsDifferent bg-[#F2F2F6] p-3">
                        {/* Main Container */}
                        <h1 className="font-['schoolbell'] text-[22px] mt-[5%] text-[#96AE00] text-center">~ Why Choose Us ~</h1>
                        <h1 className="text-[34px] text-[#2D2A6E] font-['Quicksand'] font-bold mb-2 text-center">What makes us different</h1>
                        <p className="text-[#2D2A6E] text-center">The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>

                        <div className="icons flex px-7 gap-9 justify-around items-center mt-[5%]">
                            <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                                <img src={choose1} alt="" className="mb-3"/>
                                <h1 className="text-[#2D2A6E] font-semibold">100% Fresh Food</h1>
                                <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                                <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                            </div>
                            <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                                <img src={choose2} alt="" className="mb-3" />
                                <h1 className="text-[#2D2A6E] font-semibold">Premium Quality</h1>
                                <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                                <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                            </div>
                            <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                                <img src={choose3} alt="" className="mb-3" />
                                <h1 className="text-[#2D2A6E] font-semibold">100% Natural</h1>
                                <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                                <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                            </div>
                            <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                                <img src={choose4} alt="" className="mb-3" />
                                <h1 className="text-[#2D2A6E] font-semibold">100% Organic Goods</h1>
                                <p className="text-center mb-3">Adjust global theme options and see design changes in real-time.</p>
                                <a href="" className="text-[#96AE00] font-medium uppercase">Learn more</a>
                            </div>
                        </div>
                    </div>

                    

        </>
    );
};

export default AboutUs;