import Bimg from "./assets/BestForYou.png";
const BestForYou = () => {

    return (
        <>
        <div className="flex mb-20 bg-[#F2F2F6] justify-between items-end">
            <div className="flex justify-center items-center w-1/2">
                <img src={Bimg} alt=""  className="w-[82%] mt-[2%] ml-[15%] hover:-translate-y-3 transition duration-300"/>
            </div>
            <div className="flex flex-col w-1/2">
               <h1 className="font-['schoolbell'] text-[24px] mt-[12%] text-[#96AE00]">~ The Best For Your ~</h1>
               <h1 className="font-['Quicksand'] text-[54px] font-bold text-[#2D2A6E]">Organic Drinks</h1>
               <h1 className="font-['Quicksand'] text-[54px] font-bold text-[#96AE00]">Easy Healthy<span className="text-[54px] font-bold text-[#2D2A6E]"> - Happy Life</span></h1>
               <p className="text-xl mt-5 text-[#2D2A6E]">The liber tempor cum soluta nobis eleifend option congue <br />
                doming quod mazim placerat facer possim assum.</p>
                
                <div className="container flex justify-between">
                    <div className="flex flex-col ">
                        <h1 className="border-b border-dashed border-blue-500  border-bold mt-4 py-2 text-[20px] font-medium">FRESH FRUITS:</h1>
                        <h2 className="mt-4 text-[20px] text-[#2D2A6E]">Apples, Berries & Cherries</h2>
                        <h1 className="border-b border-dotted border-blue-500  border-bold mt-4 py-2 text-[20px] font-medium text-[#2D2A6E]">EXPIRY DATE:</h1>
                        <h2 className="mt-3 mb-3 text-[20px] text-[#2D2A6E]">See on The Bottle Cap</h2>
                        <button className="p-4 bg-[#2D2A6E] rounded-[35px] text-white hover:bg-[#96AE00] transition duration-300 mt-3">ADD TO CART</button>

                    </div>
                    <div className="flex flex-col justify-start mr-[25%]">
                        <h1 className="border-b border-dashed border-blue-500  border-bold mt-4 py-2 text-[20px] font-medium text-[#2D2A6E]">INGREDIENT:</h1>
                        <h2 className="mt-4 text-[20px] text-[#2D2A6E]">Apples, Berries & Cherries</h2>
                        <h1 className="border-b border-dotted border-blue-500  border-bold mt-4 py-2 text-[20px] font-medium text-[#2D2A6E]">BOOTLE SIZE:</h1>
                        <h2 className="mt-3 mb-3 text-[20px] text-[#2D2A6E]">500ml – 1000ml</h2>
                        <button className="p-4 bg-[#96AE00] rounded-[35px] text-white mt-3">VIEW MORE</button>

                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default BestForYou;