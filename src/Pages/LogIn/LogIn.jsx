import "./css/login.css";
import logImg from "../../assets/login.png"
import emailIcon from "./assets/email.png";
import passwordIcon from "./assets/padlock.png";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="px-20 flex justify-between items-center h-screen bg-[#F2F2F6]">
      {/* Left Image Section */}
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="w-full text-center">
            <h1 className="text-[#2c296d] text-[54px] font-bold animate-slidein-top">Welcome to BestDeal</h1>
          <p className="text-xl animate-slidein-top">Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
        </div>
        
        <img src={logImg} alt="Image" className="w-2/3 animate-slidein-left" />
      </div>

      {/* Right Login Section */}
      <div className=" flex justify-center items-center w-1/2">
        <div className="animate-slidein-top p-8 max-w-md w-full">
          <h2 className="text-3xl mb-4 text-center font-bold text-[#2c296d]">
            Login
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm mb-1 font-mono">
                Email
              </label>
              <div className="relative">
                <img
                  className="w-[25px] absolute ml-3 mt-2 opacity-25"
                  src={emailIcon}
                  alt=""
                />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] tracking-[2px] ease-linear hover:border-[#859A00]  transition duration-300"
                  placeholder="Enter your email..."
                  required="required"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm mb-1 font-mono">
                Password
              </label>
              <div className="relative">
                <img
                  className="w-[25px] absolute ml-3 mt-2 opacity-25"
                  src={passwordIcon}
                  alt=""
                />
                <input
                  type="password"
                  id="password"
                  className=" w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] tracking-[2px] ease-linear hover:border-[#859A00]  transition duration-300"
                  placeholder="Enter your password..."
                  required="required"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#859A00] w-[100%] text-white py-2 px-4 rounded-lg hover:bg-[#6d53b4] transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-2">
            <p >have not any account ? <Link className='text-blue-500' to="/signup">Sign Up</Link> </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LogIn;
