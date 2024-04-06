import dev1 from '../../assets/developer/Foysal.jpg';
import dev2 from '../../assets/developer/Amit1.jpg';

import { FaFacebook, FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import './css/developer.css';


const Developers = () =>{
    return (
        <>
    <div className="Developers bg-[#F2F2F6] p-3">
    {/* Main Container */}
        <h1 className="font-['schoolbell'] text-[22px] mt-[5%] text-[#96AE00] text-center">~ Developers ~</h1>
        <h1 className="text-[34px] text-[#2D2A6E] font-['Quicksand'] font-bold mb-2 text-center">Meet Our Developers</h1>
        <p className="text-[#2D2A6E] text-center">|| Our team consists of seasoned developers with years of experience. We provide cutting-edge solutions tailored to your needs. || </p>

        <div className="second flex justify-center">
                <div className="icons flex px-7 gap-9 justify-around items-center mt-[5%]">
                <div className="flex-1 transparent-blur">
                    <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                        <img src={dev1} alt="" className="mb-3 w-[15%] rounded-full"/>
                        <h1 className="text-[#2D2A6E] font-semibold text-xl wave-text mb-5">Foysal Ahmed</h1>
                        <p className="text-center text-[#2D2A6E] mt-3 mb-3">Software Developer | Django & React Developer | Curious Programmer | Problem Solver |</p>
                        <div className="mt-3 social flex justify-between gap-x-9">
                            <a href="https://www.facebook.com/akm.foysal.ahmed" target="_blank" className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/in/md-foysal-ahmed/" target='_blank'  className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <FaLinkedin/>
                            </a>
                            <a href="https://github.com/foysalmia" target='_blank'  className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <FaGithub/>
                            </a>
                            
                            <a href="https://leetcode.com/foysalahmed/" target='_blank'  className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <SiLeetcode/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 transparent-blur">
                    <div className="p-10 bg-white rounded-lg items-center flex flex-col justify-center">
                        <img src={dev2} alt="" className="mb-3 w-[15%] rounded-full" />
                        <h1 className="text-[#2D2A6E] font-semibold text-xl wave-text mb-5">Amit Sarker</h1>
                        <p className="text-center mt-3 mb-3 text-[#2D2A6E]">||- Software Developer -||- Competitive Progammer -||- Django & React Developer -||</p>
                        <div className="mt-3 social flex justify-between gap-x-9">
                        <a href="https://www.facebook.com/profile.php?id=100007713468276" target="_blank" className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/in/amit-chandra-sarker/" target='_blank'  className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <FaLinkedin/>
                            </a>
                            <a href="https://github.com/amitsarker95" target='_blank'  className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <FaGithub/>
                            </a>
                            
                            <a href="https://leetcode.com/amitsarker95/" target='_blank'  className="hover:bg-[#96AE00] transition duration-300 rounded-full ">
                                <SiLeetcode/>
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>   
        
        </div>
</div>

        </>
    );
}

export default Developers;