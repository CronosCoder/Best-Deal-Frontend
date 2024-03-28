
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import prodImg from "../../assets/product/products1-min.jpg";
import {  useState } from 'react';

import { FaCartPlus } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";

const Whishlist = () => {
    const [quantity,setQuantity] = useState(1);

    const quantityHandler = (type) =>{
        if(type=="-"){
            quantity > 1 && setQuantity(quantity-1);
        }else if(type=="+"){
            setQuantity(quantity+1);
        }
    };

    return (
        <div>
            <NavBar/>
            <section className='mt-20 min-h-96'>
                <div className='bg-[#97ae004b] py-8 '>
                    <h1 className='font-bold text-[#2D2A6E] text-center text-xl '>Wish List</h1>
                </div>

                <table className='w-2/3 mx-auto mt-10' >
                    <thead>
                        <tr>
                            <th className='font-bold text-xl text-[#2D2A6E]'>Product Image</th>
                            <th className='font-bold text-xl text-[#2D2A6E]'>Product Name</th>
                            <th className='font-bold text-xl text-[#2D2A6E]'>Unit Price</th>
                            <th className='font-bold text-xl text-[#2D2A6E]'>Quantity</th>
                            <th className='font-bold text-xl text-[#2D2A6E]'>Total</th>
                            <th className='font-bold text-xl text-[#2D2A6E]'>Add to Cart</th>
                            <th className='font-bold text-xl text-[#2D2A6E]'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-20 h-20">
                                        <img src={prodImg} alt="this is product image" />
                                    </div>
                                </div>
                            </td>
                            <td className='font-semibold text-xl'>New and Fresh vegetables</td>
                            <td className='font-semibold text-xl'>$ 130</td>
                            <td>
                                <div className='grid grid-cols-3'>
                                    <div onClick={() => quantityHandler("-")} className='p-1 border bg-[#2D2A6E] text-white font-bold text-2xl text-center cursor-pointer rounded-l-md'>-</div>
                                    <div className='p-1 border font-bold text-3xl text-center'>{quantity}</div>
                                    <div onClick={() => quantityHandler("+")} className='p-1 border bg-[#2D2A6E] text-white font-bold text-2xl text-center cursor-pointer rounded-r-md'>+</div>
                                </div>
                            </td>
                            <td className='font-semibold text-xl'>$ 130</td>

                            <td  className='flex justify-center items-center'>
                                <button className='p-3 bg-green-200  rounded-md'><FaCartPlus size={20} color='#2D2A6E' /></button>
                            </td>
                            <td className='flex justify-center items-center'>
                                <button className='p-3  bg-red-200 rounded-md'><RiDeleteBin3Fill size={20} color='#2D2A6E' /></button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </section>
            <Footer/>
        </div>
    );
};

export default Whishlist;