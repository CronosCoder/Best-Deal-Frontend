import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Checkout = () => {
    return (
        <>
            <NavBar/>
            <div className="mt-24 mx-[10%]">
                <h1 className="font-semibold text-3xl text-gray-700 font-['Quicksand']">Checkout</h1>
                <div className="grid grid-cols-4 mt-4 gap-4">
                    <div className="rounded-lg col-span-3">
                        <div className="flex justify-start items-center bg-orange-200 p-3 rounded-lg">
                            <div className="p-2 bg-orange-400 rounded-full">
                                <IoMdInformationCircleOutline size={35} />
                            </div>
                            <div className="ml-2">
                                <h1 className="font-semibold text-xm">Your Order is on Hold</h1>
                                <p className="text-sm">After providing all of your informations and selecting payment method then it will be active. </p>
                            </div>
                        </div>
                        <div className="mt-5 bg-white border rounded-lg p-4">
                            <h1 className="text-xl">Billing Information</h1>
                            <div className="my-3 grid grid-cols-3 grid-flow-row gap-4 ">
                                <input className="border p-2 rounded-md" type="text" name="" placeholder="Customer Name" id="" />
                                <input className="border p-2 rounded-md" type="number" name="" placeholder="Phone Number" id="" />
                                <input className="border p-2 rounded-md" type="email" name="" placeholder="Email" id="" />
                                <textarea rows={5} placeholder="Shipping Address" className="resize-y p-3 border rounded-md col-span-3 " />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white border p-3 rounded-lg">
                            <h1>Price Details</h1>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-gray-500">Sub Total Price</p>
                                <p className="text-left text-sm">USD 130</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-gray-500">Delivery Fee</p>
                                <p className="text-left text-sm">USD 10</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-gray-500">VAT</p>
                                <p className="text-left text-sm">USD 15</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="text-left text-sm">3 Days</p>
                            </div>
                            <hr className="my-3" />
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-xm font-medium ">Total</p>
                                <p className="text-left text-xm font-medium">USD 150</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Checkout;