
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import prodImg from "../../assets/product/products1-min.jpg";

const Whishlist = () => {
    return (
        <div>
            <NavBar/>
            <section className='mt-20 min-h-96'>
                <div className='bg-[#97ae004b] py-8 '>
                    <h1 className='font-bold text-[#2D2A6E] text-center text-xl '>Wish List</h1>
                </div>
                <div className='my-8 w-[90%] mx-auto'>
                    <table className='table-auto w-full border'>
                        <thead className='p-3 border'>
                            <tr>
                                <th className='border'>Image</th>
                                <th className='border'>Name</th>
                                <th className='border'>Unite Price</th>
                                <th className='border'>Quantity</th>
                                <th className='border'>Total Price</th>
                                <th className='border'>Add to Cart</th>
                                <th className='border'>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border'>
                                <td> <img src={prodImg} className='w-28 h-28' alt="" /></td>
                                <td>Pure Fresh Organic Beef 4</td>
                                <td> $ 130</td>
                                <td><button>-</button><input type="text" /><button>+</button></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Whishlist;