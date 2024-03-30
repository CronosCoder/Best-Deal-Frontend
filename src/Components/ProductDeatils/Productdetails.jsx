import PdRating from "../PdRating/PdRating";
import PdImage from './assets/product-1.png'
import { FaBox  } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { useState } from 'react';
import Navbar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx';

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
    <>
    <Navbar/>
      <div className="mt-[4%] p-8 flex justify-around h-screen bg-[#F2F2F6]">
        {/* Main Container */}

        <div className="p-10 rounded-xl ml-[10%] bg-[#FFFFFF]">
            {/* First Container */}
          <h1 className="text-[#2D2A6E] text-[34px] mb-6">
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
                    <img src={PdImage} alt="" className="w-[90%]"/>
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
                        <h1 className="flex justify-center gap-9 px-[70px] py-3 bg-[#F2F2F6] rounded-[50px]">
                            <div onClick={handleDecrement} className="cursor-pointer font-semibold p-2">-</div>
                            <span className="mt-1.5">{count}</span>
                            <div onClick={handleIncrement} className="cursor-pointer font-semibold p-2">+</div>
                        </h1>
                    </div>
                    <button className="w-[100%] mt-5 px-12 py-6 bg-[#859A00] rounded-[40px] text-white">ADD TO CART</button>
                </div>
            </div>

        </div>

        <div className="p-5 flex flex-col justify-between border-2 border-[#F48C8D] rounded-xl w-[15%] h-[80%] opacity-55">
            {/* Second Container */}
          <div className="border-b-2 border-[#F48C8D] flex flex-col justify-center items-center mt-2 py-10">
          <FaBox/>
            <h1>Free shipping apply to all </h1>
            <h1>orders over $90</h1>
          </div>

          <div className="border-b-2 border-[#F48C8D] flex flex-col justify-center items-center mt-2 p-10">
          <IoShieldOutline />
            <h1>Guaranteed 100%</h1>
            <h1>Organic</h1>
            <h1>from nature farms</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-2">
            <FaBox/>
            <h1>60 days returns if you</h1>
            <h1>change</h1>
            <h1>your mind</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;
