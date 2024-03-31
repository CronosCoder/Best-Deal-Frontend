import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import CartTable from "../../Components/Table/Cart/CartTable";

const Cart = () => {
    return (
        <>
            <NavBar/>
            <div className="mt-20">
                <div className="py-8 bg-[#96AE00] bg-opacity-90"><h1 className="text-center text-2xl text-white">Cart Details</h1></div>
                <CartTable/>
                <div className="flex justify-end w-[80%] mx-auto">
                    <div className="mt-8 w-96">
                        <h1 className="mb-2 text-3xl text-[#96AE00]">Cart Total</h1>
                        <article className="flex px-5 py-2 border justify-between">
                            <h3 className="text-xm text-gray-500">Subtotal</h3>
                            <h3 className="text-xm text-gray-500">$ 130</h3>
                        </article>
                        <article className="flex px-5 py-2 border justify-between mb-3">
                            <h3 className="text-xm text-gray-500">Total</h3>
                            <h3 className="text-xm text-gray-500">$ 130</h3>
                        </article>
                        <button className="uppercase font-semibold text-white text-center bg-[#96AE00] hover:bg-[#2D2A6E]  py-4 duration-300 px-8 rounded-full">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Cart;