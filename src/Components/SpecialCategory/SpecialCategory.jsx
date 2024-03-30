import { NavLink,Outlet } from "react-router-dom";

const SpecialCategory = () => {
    return (
        <div className="mx-10 pb-10">
            <h3 className="font-['schoolbell'] text-center text-xl text-[#96AE00]">~ Special Categories ~</h3>
            <h1 className="font-['Quicksand'] text-center text-3xl text-[#2D2A6E] font-bold mt-2 mb-3">Best Food Categories</h1>
            <div className="my-3 mx-auto flex justify-center gap-10">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-[#96AE00] font-semibold" : "text-[#4f4f5c] font-semibold"}>All Products</NavLink>
                <NavLink to="/nested/freshmeat" className={({ isActive }) => isActive ? "text-[#96AE00] font-semibold" : "text-[#4f4f5c] font-semibold"}>Fresh Meat</NavLink>
                <NavLink to="/nested/freshvegetable" className={({ isActive }) => isActive ? "text-[#96AE00] font-semibold" : "text-[#4f4f5c] font-semibold"}>Fresh Vegetables</NavLink>
                <NavLink to="/nested/biscuitsnack/" className={({ isActive }) => isActive ? "text-[#96AE00] font-semibold" : "text-[#4f4f5c] font-semibold"} >Biscuits Snack</NavLink>
            </div>
            <div className=" mt-8 overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
};

export default SpecialCategory;