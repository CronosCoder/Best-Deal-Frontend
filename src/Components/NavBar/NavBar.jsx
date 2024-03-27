import { FaOpencart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-4 bg-white drop-shadow-lg px-20 fixed w-full top-0 left-0 z-50 ">
            <h1 
                className="w-[200px] flex items-center text-4xl text-[#390279] font-['Style_Script'] "
                >
                <FaOpencart className="mr-3" color="#96AE00" size={40} /> Best Deal
            </h1>
            <div className="flex justify-between items-center w-1/4">
                <a className="text-[#390279] hover:text-[#96AE00] hover:underline font-semibold" href="">Categories</a>
                <a className="text-[#390279] hover:text-[#96AE00] hover:underline font-semibold" href="">Products</a>
                <a className="text-[#390279] hover:text-[#96AE00] hover:underline font-semibold" href="">About Us</a>
            </div>
            <div className="flex items-center justify-between w-[180px]">
                <a className="bg-[#F5F2FF] p-3 rounded-full font-thin" href=""><IoMdHeartEmpty size={25} /></a>
                <a className="bg-[#FFF3EC] p-3 rounded-full font-thin" href=""><IoCartOutline size={25} /></a>
                <Link to={"/login"} className="bg-[#ECFBFF] p-3 rounded-full font-thin"><CiUser size={25} /></Link>
            </div>
        </nav>
    );
};

export default NavBar;