import WishListTableRow from "./WishListTableRow";

const WishListTable = () => {
    return (
        <table className='w-[80%] mx-auto mt-10 text-center' >
            <thead>
                <tr className='bg-gray-100'>
                    <th className='font-bold text-xl text-[#2D2A6E] p-2 border'>Product Image</th>
                    <th className='font-bold text-xl text-[#2D2A6E] p-2 border'>Product Name</th>
                    <th className='font-bold text-xl text-[#2D2A6E] p-2 border'>Unit Price</th>
                    <th className='font-bold text-xl text-[#2D2A6E] py-2 px-3 border'>Quantity</th>
                    <th className='font-bold text-xl text-[#2D2A6E] py-2 border px-5'>Total</th>
                    <th className='font-bold text-xl text-[#2D2A6E] p-1 border'>Add to Cart</th>
                    <th className='font-bold text-xl text-[#2D2A6E] p-1 border'>Remove</th>
                </tr>
            </thead>
            <tbody>
                <WishListTableRow/>
                <WishListTableRow/>
            </tbody>
        </table>
    );
};

export default WishListTable;