import PdImage from '../../assets/product/products13-min.jpg';
import { FaBox } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { useState } from 'react';
import PdRating from "../../Components/PdRating/PdRating.jsx";
import NavBar from '../../Components/NavBar/NavBar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const ProductDetails = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='bg-[#F2F2F6]'>
            <NavBar />

            <div className="pt-28 mx-[100px] flex justify-center items-start">
                {/* Main Container */}
                <div className="py-10 px-8 rounded-xl ml-[2%] bg-[#FFFFFF]">
                    {/* First Container */}
                    <h1 className="text-[#2D2A6E] text-3xl mb-6">
                        Pure Irish Organic 4 Beef Quarter Pounder Burgers - 1Kg
                    </h1>
                    <div className="inner flex gap-x-9 mb-8">
                        <h1>
                            Brands: <span className="text-[#96AE21]">ORFARM</span>
                        </h1>

                        <div className="reviews flex gap-y-2">
                            <span>
                                <PdRating />
                            </span>
                            <h1>02 REVIEWS</h1>
                        </div>

                        <h1>SKU: <span className="text-[#96AE21]">ORFARMVE005</span></h1>
                    </div>
                    <hr />
                    <div className="product flex">

                        <div className="image">
                            <img src={PdImage} alt="" className="w-4/5" />
                        </div>

                        <div className="text p-10 mt-[8%] ">
                            <h1 className="text-[34px] text-[#EA0D42] font-medium">$56.00</h1>
                            <ul className="list-disc mt-5 text-[18px] mb-4">
                                <li>Delicious non - dairy cheese sauce</li>
                                <li>Vegan & Allergy friendly</li>
                                <li>Smooth, velvety dairy free cheese sauce</li>
                            </ul>
                            <hr />
                            <div className="flex justify-center gap-3 items-center mt-5">
                                <h1 className="text-[16px] font-semibold">Quantity: </h1>
                                <div className="flex justify-center gap-4 bg-[#F2F2F6] rounded-full">
                                    <div onClick={handleDecrement} className="cursor-pointer text-center font-semibold py-3 pl-7 my-auto "><HiMinus/></div>
                                    <div className="flex justify-center items-center p-3 bg-[#F2F2F6] min-w-">{count}</div>
                                    <div onClick={handleIncrement} className="cursor-pointer font-semibold py-3 pr-7 my-auto"><GoPlus/></div>
                                </div>
                            </div>
                            <button className="w-[100%] mt-5 px-12 py-6 bg-[#859A00] rounded-[40px] text-white">ADD TO CART</button>
                        </div>
                    </div>

                </div>

                <div className="border border-[#F48C8D] p-8 rounded-xl opacity-70 ml-5 w-72">
                    {/* Second Container */}
                    <div className="border-b-[1px] border-[#F48C8D] border-dashed mx-2 pb-5 text-center">
                        <FaBox size={20} className='mx-auto' color='#F48C8D'/>
                        <h1 className='text-xm mt-2'>
                            Free shipping apply to all
                            orders over $90
                        </h1>
                    </div>
                    <div className="border-b-[1px] border-[#F48C8D] border-dashed mx-2 pb-5 text-center mt-5">
                        <IoShieldOutline size={20} className='mx-auto' color='#F48C8D'/>
                        <h1 className='text-xm mt-2'>Guaranteed 100% Organic
                            from nature farms</h1>
                    </div>
                    <div className=" mx-2  text-center mt-5">
                        <FaBox size={20} className='mx-auto' color='#F48C8D'/>
                        <h1 className='text-xm mt-2'>60 days returns if you change your mind </h1>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetails;
