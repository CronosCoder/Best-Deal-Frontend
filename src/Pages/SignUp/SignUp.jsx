import { MdOutlineDriveFileRenameOutline, MdAlternateEmail, MdPassword } from "react-icons/md";
import { useEffect, useState } from "react";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='flex h-screen justify-center items-center bg-[#F2F2F6]'>
      <div className={`flex justify-center items-center w-1/2 rounded-lg bg-white shadow-lg backdrop-filter backdrop-blur-lg p-8 ${isVisible ? 'opacity-100 transform translate-y-0 transition duration-500' : 'opacity-0 transform -translate-y-10'}`}>
        <div className="mb-3 max-w-md w-full">
          <h2 className="font-['Quicksand'] text-3xl mb-4 text-center font-bold text-[#2c296d]">
            Registration
          </h2>
          <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-sm mb-1 font-mono">
            First Name
            </label>
            <div className="relative">
            <MdOutlineDriveFileRenameOutline className="w-[35px] absolute ml-3 mt-3 opacity-50" />

              <input
                type="text"
                id="first_name"
                className="w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] tracking-[2px] ease-linear hover:border-[#859A00]  transition duration-300"
                placeholder="Enter your first name..."
                required="required"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-sm mb-1 font-mono">
              Last Name
            </label>
            <div className="relative">
            <MdOutlineDriveFileRenameOutline className="w-[35px] absolute ml-3 mt-3 opacity-50" />
              <input
                type="text"
                id="last_name"
                className=" w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] tracking-[2px] ease-linear hover:border-[#859A00]  transition duration-300"
                placeholder="Enter your last name..."
                required="required"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1 font-mono">
              Email
            </label>
            <div className="relative">
            <MdAlternateEmail className="w-[35px] absolute ml-3 mt-3 opacity-50" />
              <input
                type="email"
                id="email"
                className=" w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] tracking-[2px] ease-linear hover:border-[#859A00]  transition duration-300"
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
              <MdPassword className="w-[35px] absolute ml-3 mt-3 opacity-50"/>
              <input
                type="password"
                id="password"
                className=" w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] tracking-[2px] ease-linear hover:border-[#859A00]  transition duration-300"
                placeholder="Enter a password..."
                required="required"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm_password" className="text-sm mb-1 font-mono">
              Confirm Password
            </label>
            <div className="relative">
            <MdPassword className="w-[35px] absolute ml-3 mt-3 opacity-50"/>
              <input
                type="password"
                id="confirm_password"
                className=" w-full pl-[60px] py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d2a6e] tracking-[2px] ease-linear hover:border-[#859A00]  transition duration-300"
                placeholder="Enter confirm password..."
                required="required"
              />
            </div>
          </div>


          <button
            type="submit"
            className="bg-[#859A00] w-[100%] text-white py-2 px-4 rounded-lg hover:bg-[#6d53b4] transition duration-300"
          >
            Sign Up
          </button>
        </form>
          <div className="flex justify-between mt-2">
            <p className=''>Already have an account? <a href="#" className="text-[#6d53b4]">Sign in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
