import NavBar from "../../Components/NavBar/NavBar";
import "./css/about-us.css";
import bgOne from "./assets/bg3.png";
import about1 from "./assets/about-svg1.svg";
import about2 from "./assets/about-svg2.svg";
import about3 from "./assets/about-svg3.svg";

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


            <div className="p-3 flex justify-around items-center mt-[10%]">
                        {/*Another section*/}
                        <div className="flex flex-col items-center justify-center">
                            <img src={about1} alt="" className="mb-4"/>
                            <h1>Select Your Products</h1>
                            <p>Choose from select produce to start. </p>
                            <p>Keep, add, or remove items.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <img src={about2} alt="" className="mb-4"/>
                            <h1>Our Shop Best Deal</h1>
                            <p>We provide 100+ products, provide </p>
                            <p>enough nutrition for your family..</p>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <img src={about3} alt="" className="mb-4"/>
                            <h1>Delivery To Your</h1>
                            <p>Delivery to your door. Up to 100km</p>
                            <p>and it is completely free.</p>
                        </div>
                    </div>

        </>
    );
};

export default AboutUs;