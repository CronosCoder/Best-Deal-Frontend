/* eslint-disable react/prop-types */
import PdRating from '../PdRating/PdRating';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { PiEyeThin } from "react-icons/pi";
import sampleProdImg from '../../assets/product/products1-min.jpg';
import { Link } from 'react-router-dom';

const PdCard = () => {
    return (
        <div className="keen-slider__slide bg-white w-[200px] rounded-md border border-white relative">
            <div className='absolute bg-cyan-400 rounded-md p-2  z-40'>
                <h2 className='text-white text-xs'>-40%</h2>
            </div>
            <div className='absolute bg-orange-400 rounded-md p-2  z-40 right-0 top-0'>
                <h2 className='text-white text-xs'>HOT</h2>
            </div>
            <div className='overflow-hidden mt-3'>
                <img src={sampleProdImg} className='hover:scale-125 transition-all duration-300' alt="this is a image" />
            </div>
            <div className='bg-[#F7F7F9] p-3 rounded-lg'>
                <Link className='hover:underline'><p className='text-xs'>Fresh Fruits</p></Link>
                <Link to={"/product/1"} className='hover:underline'><h2 className='text-xl font-semibold text-[#2D2A6E] line-clamp-2'>Pure Irish Organic 4 Beef Quarter</h2></Link>
                <PdRating className="my-3" />
                <h2 className='text-xl font-semibold text-red-500 my-3'>$ 52.00 <span className='text-gray-400 text-[15px] line-through'>$ 80.00</span> </h2>
                <div className='flex justify-between items-center mx-2'>
                    <a className="bg-[#F5F2FF] hover:bg-[#96AE00] hover:text-white transition-all duration-200 p-3 rounded-full font-thin border border-white" href=""><IoMdHeartEmpty size={20} /></a>
                    <a className="bg-[#FFF3EC] hover:bg-[#96AE00] hover:text-white transition-all duration-200 p-3 rounded-full font-thin border border-white" href=""><PiEyeThin size={20} /></a>
                    <a href={"/login"} className="bg-[#ECFBFF] hover:bg-[#96AE00] hover:text-white transition-all duration-200 p-3 rounded-full font-thin border border-white"><IoCartOutline size={20} /></a>
                </div>
            </div>
        </div>
    );
};

export default PdCard;