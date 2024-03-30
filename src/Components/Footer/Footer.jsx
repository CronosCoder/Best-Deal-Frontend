/* eslint-disable react/no-unescaped-entities */
import "./CSS/footer.css";
import bgImg from "./assets/footer-shape-1.svg"
import icon1 from "./assets/icon-1.svg"
import icon2 from "./assets/icon-2.svg"
import icon3 from "./assets/icon-3.svg"
import icon4 from "./assets/icon-4.svg"
import icon5 from "./assets/icon-5.svg"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <>
        <footer className="footer py-16 mt-16"  style={{backgroundImage: `url(${bgImg})`}}>
            <div className="flex justify-around px-16">
                <div className="flex justify-center flex-col items-center text-white">
                    <img src={icon1} alt="icon" className="w-[20px]"/>
                    <h1>FAST DELIVERY</h1>
                    <p>All Over Bangladesh</p>
                </div>

                <div className="flex justify-center flex-col items-center text-white">
                    <img src={icon2} alt="icon" className="w-[20px]"/>
                    <h1>SAFE PAYMENT</h1>
                    <p>100% Secure Payment</p>
                </div>

                <div className="flex justify-center flex-col items-center text-white">
                    <img src={icon3} alt="icon" className="w-[20px]"/>
                    <h1>ONLINE DISCOUNT</h1>
                    <p>Add Multi-buy Discount</p>
                </div>

                <div className="flex justify-center flex-col items-center text-white">
                    <img src={icon4} alt="icon" className="w-[20px]"/>
                    <h1>HELP CENTER</h1>
                    <p>Dedicated 24/7 Support</p>
                </div>

                <div className="flex justify-center flex-col items-center text-white">
                    <img src={icon5} alt="icon" className="w-[20px]"/>
                    <h1>CURATED ITEMS</h1>
                    <p>From Handpicked Sellers</p>
                </div>
            </div>
            <hr  className="mt-10 opacity-15 mx-[100px] p-2"/><br />


            <div className="flex items-start justify-around text-white ml-[55px]">
                <div>
                    <h1 className="text-[20px] font-medium">LET US HELP YOU</h1>
                    <p className="mt-5 text-[20px] opacity-50">If you have any question, please <br />
                    contact us at: <span className="text-[#96AE00] opacity-100"><a href="#" >support@example.com</a></span></p>

                    <h2 className="mt-[50px] text-[20px] opacity-50">Social Media:</h2>
                    <div className="social flex gap-3 ">
                    <FaFacebookF className="mt-3 hover:text-[#96AE00] transition duration-300 cursor-pointer opacity-75"/>
                    <FaLinkedinIn className="mt-3 hover:text-[#96AE00] transition duration-300 cursor-pointer opacity-75"/>
                    <FaGithub className="mt-3 hover:text-[#96AE00] transition duration-300 cursor-pointer opacity-75"/>
                    <FaInstagram className="mt-3 hover:text-[#96AE00] transition duration-300 cursor-pointer opacity-75"/>
                    </div>
                </div>

                <div>
                    <h1 className="text-[20px] font-medium">LOOKING FOR ORFARM?</h1>
                    <p className="mt-5 text-[20px] opacity-50">68 St. Vicent Place, Glasgow, Greater
                    Newyork NH2012, UK.</p>

                    <h2 className="mt-16 text-[20px] "><span className="opacity-75">Monday – Friday: </span> 8:10 AM – 6:10 PM</h2>
                    <h2 className="text-[20px] "><span className="opacity-75">Saturday:</span> 10:10 AM – 06:10 PM </h2>
                    <h2 className="text-[20px] "><span className="opacity-75">Sunday:</span> Close</h2>
                </div>

                <div className="border-r-[1px] px-6">
                    <h1 className="text-[20px] font-medium">HOT CATEGORIES</h1>
                    <div className="mt-5 py-5">
                    <a href="" className=" text-[20px] opacity-50 hover:opacity-100 transition duration-300">Fruits & Vegetables</a><br />
                    <a href="" className="text-[20px] opacity-50 hover:opacity-100  transition duration-300">Dairy Products</a><br />
                    <a href="" className="text-[20px] opacity-50 hover:opacity-100  transition duration-300">Package Foods</a><br />
                    <a href="" className="text-[20px] opacity-50 hover:opacity-100  transition duration-300">Beverage</a><br />
                    <a href="" className="text-[20px] opacity-50 hover:opacity-100  transition duration-300">Health & Wellness</a>
                    </div>
                </div>

                <div className="Disclaimer ml-[20px]">
                <h1 className="text-[22px] font-medium">Disclaimer</h1>
                <p className="mt-5 py-5">This site is created only for learning purposes. <br /> To make the GUI we have followed some designer's awesome designs. <br /> We assure you that we are not copying you. <br /> We are just inspired by you and learning from your designs. <br /> If you have still any queries feel free to contact us.</p>
                </div>
            </div>
            <hr className="mt-10 opacity-15 mx-[100px] p-2" />

            <h1 className="text-center text-[22px] font-medium text-white">Copyright ©  all rights reserved. Powered by  <a href="https://www.linkedin.com/in/md-foysal-ahmed/" target="_blank" className="underline">Foysal Ahmed</a> & <a href="https://www.linkedin.com/in/amit-chandra-sarker/" target="_blank" className="underline">Amit Sarker</a>.</h1>
            

        </footer>
        </>
    );
}

export default Footer
