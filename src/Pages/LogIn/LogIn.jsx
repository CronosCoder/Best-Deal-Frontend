import "./css/login.css";
import loginImage from "./assets/login.png";
import emailIcon from "./assets/email.png";
import passwordIcon from "./assets/padlock.png";

const LogIn = () => {
  return (
    <div className="flex h-screen">
      {/* Left Image Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-[#F2F2F6]">
        <div className="text w-full flex justify-center ">
            <h1 className="font-bold">Wellcome to BestDeal</h1>
        </div>
        <img src={loginImage} alt="Image" />
      </div>

      {/* Right Login Section */}
      <div className="flex justify-center items-center w-1/2 bg-[#F2F2F6]">
        <div className="p-8 max-w-md w-full">
          <h2 className="text-3xl mb-4 text-center font-bold text-[#2C296D]">
            Login
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm mb-1">
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
                  className="w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] hover:tracking-[1px] ease-linear hover:border-[#859A00]  transition duration-300"
                  placeholder="Enter your email"
                  required="required"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm mb-1">
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
                  className=" w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] hover:tracking-[1px] ease-linear hover:border-[#859A00]  transition duration-300"
                  placeholder="Enter your password"
                  required="required"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#859A00] w-[100%] text-white py-2 px-4 rounded-lg hover:bg-[#2d2a6e] transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
