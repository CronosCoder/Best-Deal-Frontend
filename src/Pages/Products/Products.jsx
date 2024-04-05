import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import PdCard from "../../Components/PdCard/PdCard";

const Products = () => {
    const [searchText,setSearchText] = useState("");
    
    const handleSearch = () =>{
        console.log(searchText);
    }

    return (
        <>
            <NavBar/>
            <div className="pt-24 pb-10 w-full bg-[#F2F2F6]">
                <div className="mt-2 flex  gap-1 w-3/5 mx-auto">
                    <input onChange={(e)=>setSearchText(e.target.value)} className="px-5 py-3 w-full rounded-full border-2 border-[#859A00]" type="text" placeholder="Search Products by name"/>
                    <button onClick={handleSearch} className="bg-[#859A00] hover:bg-[#2d2a6e] duration-300 px-5 py-3 rounded-full text-white font-medium text-xl">Search</button>
                </div>
                <div className="mt-10 grid grid-cols-5 gap-4 mx-10">
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                    <PdCard />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Products;