
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import WishListTable from '../../Components/Table/WishList/WishListTable';




const Whishlist = () => {
    

    return (
        <div>
            <NavBar/>
            <section className='mt-20 min-h-96'>
                <div className='bg-[#97ae004b] py-8 '>
                    <h1 className='font-bold text-[#2D2A6E] text-center text-xl '>Wish List</h1>
                </div>
                <WishListTable/>
                
            </section>
            <Footer/>
        </div>
    );
};

export default Whishlist;