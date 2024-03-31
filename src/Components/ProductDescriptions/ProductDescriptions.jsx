import { useState } from "react";
import PdImg from "./asset/product-single-1.png";
import UserImg from './asset/user.png';
import PdRating from "../PdRating/PdRating";
import PdCard from "../PdCard/PdCard";

const ProductComponent = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [contentVisible, setContentVisible] = useState(true);
 
  const handleTabClick = (tab) => {

    setContentVisible(false);
    setTimeout(() => {
        setActiveTab(tab);
        setContentVisible(true);
      }, 300);
  
  };

  return (
    <div className={`pt-10 mx-[100px] flex justify-center items-start`}>
      {/* Main Container */}
      <div className="w-full py-10 px-8 rounded-xl ml-[2%] bg-[#FFFFFF]">
        {/* First Container */}
        <div className=" mx-auto">
          <div className="border border-gray-300 rounded-lg p-8">
            <div className="flex justify-between mb-4">
              <button
                className={`text-sm font-medium focus:outline-none ${
                  activeTab === "description"
                    ? "text-[#96AE00] border-b-2 border-[#96AE00] p-2 transition duration-300"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("description")}
              >
                PRODUCT DESCRIPTION
              </button>
              <button
                className={`text-sm font-medium focus:outline-none ${
                  activeTab === "additional"
                    ? "text-[#96AE00] border-b-2 border-[#96AE00] p-2 transition duration-300"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("additional")}
              >
                ADDITIONAL INFORMATION
              </button>
              <button
                className={`text-sm font-medium focus:outline-none ${
                  activeTab === "reviews"
                    ? "text-[#96AE00] border-b-2 border-[#96AE00] p-2 transition duration-300"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabClick("reviews")}
              >
                REVIEWS (1)
              </button>
            </div>
            <hr />
            <div  className={`transition-opacity duration-500 ease-in ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            {activeTab === "description" && (
              <div className="">
                {/* Content for PRODUCT DESCRIPTION */}
                <h2 className="mt-2 mb-3">
                  Designed by Puik in 1949 as one of the first models created
                  especially for Carl Hansen & Son, and produced since 1950. The
                  last of a series of chairs wegner designed based on
                  inspiration from antique chinese armchairs. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  eserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, aque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </h2>

                <span className="font-semibold text-[14px] py-2 border-b-2">
                  PRODUCT DETAILS
                </span>

                <div className="flex mt-2">
                  <div className="text w-1/2 mt-2">
                    Material: Plastic, Wood Legs: Lacquered oak and black
                    painted oak Dimensions and Weight: Height: 80 cm, Weight:
                    5.3 kg Length: 48cm Depth: 52 cm Lemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt.
                  </div>

                  <div className="pl-10 ">
                    <img src={PdImg} alt="" className="mx-auto rounded-md" />
                  </div>

                </div>
                <span className="font-semibold text-[14px] py-2 border-b-2">
                  PRODUCT DETAILS
                </span>
                <p className="mt-3">Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.</p>
                <div className="mt-4 mb-3">
                    <iframe
                    className="rounded-md"
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/p40gaCou2Qs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>

                <span className="font-semibold text-[14px] py-2 border-b-2">PRODUCT SUPREME QUALITY</span>

                <p className="mt-3 mb-3">Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.</p>

                <p>Duis semper erat mauris, sed egestas purus commodo. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

              </div>
            )}
            {activeTab === "additional" && (
              <div>
                {/* Content for ADDITIONAL INFORMATION */}
                <h2 className="mt-2 mb-3">
                  Designed by Puik in 1949 as one of the first models created
                  especially for Carl Hansen & Son, and produced since 1950. The
                  last of a series of chairs wegner designed based on
                  inspiration from antique chinese armchairs. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  eserunt mollit anim id est laborum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, aque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </h2>

                <span className="font-semibold text-[14px] py-2 border-b-2">
                  PRODUCT DETAILS
                </span>

                <div className="flex mt-2">
                  <div className="text w-1/2 mt-2">
                    Material: Plastic, Wood Legs: Lacquered oak and black
                    painted oak Dimensions and Weight: Height: 80 cm, Weight:
                    5.3 kg Length: 48cm Depth: 52 cm Lemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt.
                  </div>

                  <div className="pl-10 ">
                    <img src={PdImg} alt="" className="mx-auto rounded-md" />
                  </div>

                </div>
                <span className="font-semibold text-[14px] py-2 border-b-2">
                  PRODUCT DETAILS
                </span>
                <p className="mt-3">Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.</p>
                <div className="mt-4 mb-3">
                    <iframe
                    className="rounded-md"
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/p40gaCou2Qs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>

                <span className="font-semibold text-[14px] py-2 border-b-2">PRODUCT SUPREME QUALITY</span>

                <p className="mt-3 mb-3">Form is an armless modern chair with a minimalistic expression. With a simple and contemporary design Form Chair has a soft and welcoming ilhouette and a distinctly residential look. The legs appear almost as if they are growing out of the shell. This gives the design flexibility and makes it possible to vary the frame. Unika is a mouth blown series of small, glass pendant lamps, originally designed for the Restaurant Gronbech. Est eum itaque maiores qui blanditiis architecto. Eligendi saepe rem ut. Cumque quia earum eligendi.</p>

                <p>Duis semper erat mauris, sed egestas purus commodo. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>


              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                {/* Content for REVIEWS */}
                <h1 className="text-2xl text-[#2D2A6E] mt-2 font-medium ">1 review for Cheap and delicious fresh chicken</h1>

                <div className="flex mt-3 mb-3">
                    <img src={UserImg} alt="user-image" className="w-[70px] border-[0.5px] p-1 border-black rounded-[50%]" />
                    <div className="reviews">
                        <div className="section flex my-auto">
                            <h1 className="ml-3">PUTIN</h1>
                            <span className="ml-3">
                                <PdRating />
                            </span>
                        </div>
                        <p className="ml-3 mb-3">--April 9, 2022:</p>
                        <span className="ml-3">very good</span>  
                    </div>
                    
                </div>
                <hr />

                <h1 className="text-xl mt-3 mb-2">Add a review</h1>
                <form action="" className="mb-2 p-2 flex items-center justify-between gap-x-[15px]">
                    <input className="border-[1px] border-[#96AE00] py-3 px-8 rounded-full w-1/2 outline-none" type="text" placeholder="NAME" required/>
                    <input className="border-[1px] border-[#96AE00]  py-3 px-8 rounded-full w-1/2 outline-none" type="email" placeholder="EMAIL" required/>
                </form>

                <h1 className="text-xl mt-1 mb-1">Your Rating</h1>
                <PdRating/>

                <textarea className="border-[1px] w-full mt-3 outline-none p-3" name="review" id="" cols="30" rows="30"></textarea>
                <button className="border-[1px] bg-[#96AE00] px-10 py-4 rounded-full text-white font-medium">SUBMIT</button>
                
              </div>
            )}

            </div>
          </div>
        </div>
      </div>

      <div className="border border-[#64e295] p-8 rounded-xl opacity-70 ml-5 w-72">
        <h1 className="text-xl mb-3 font-semibold">Recent Products</h1>
        <PdCard />
        <PdCard />
        <PdCard />
      </div>
    </div>
  );
};

export default ProductComponent;
