import { useState } from 'react';
import prodImg from "../../../assets/product/products10-min.jpg";
import { FaCartPlus } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";

const WishListTableRow = () => {
    const [quantity, setQuantity] = useState(1);

    const quantityHandler = (type) => {
        if (type == "-") {
            quantity > 1 && setQuantity(quantity - 1);
        } else if (type == "+") {
            setQuantity(quantity + 1);
        }
    };
    
    return (
        <tr>
            <td className='bg-white border'>
                <img src={prodImg} alt="this is product image" className='w-36 h-36 mx-auto' />
            </td>
            <td className='text-xl border'>New and Fresh vegetables</td>
            <td className='text-xl border'>$ 130</td>
            <td className='border'>
                <div className='grid grid-cols-3'>
                    <div onClick={() => quantityHandler("-")} className='p-1 border bg-[#96AE00] text-white font-bold text-2xl text-center cursor-pointer rounded-l-md'>-</div>
                    <div className='p-1 border text-2xl text-center'>{quantity}</div>
                    <div onClick={() => quantityHandler("+")} className='p-1 border bg-[#96AE00] text-white font-bold text-2xl text-center cursor-pointer rounded-r-md'>+</div>
                </div>
            </td>
            <td className='text-2xl border text-[#2D2A6E]' >$ 130</td>

            <td className='border'>
                <button className='p-3 bg-green-200  rounded-md'><FaCartPlus size={20} color='#2D2A6E' /></button>
            </td>
            <td className='border'>
                <button className='p-3  bg-red-200 rounded-md'><RiDeleteBin3Fill size={20} color='#2D2A6E' /></button>
            </td>
        </tr>
    );
};

export default WishListTableRow;