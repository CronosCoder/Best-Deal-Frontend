

const SignUp = () => {
    return (
      <div className="flex h-screen justify-center items-center  bg-[#F2F2F6]">
      <div className=" flex justify-center items-center w-1/2">
      <div className=" p-8 max-w-md w-full">
        <h2 className="text-3xl mb-4 text-center font-bold text-[#2c296d]">
          Registration
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-sm mb-1 font-mono">
            First Name
            </label>
            <div className="relative">
              <img
                className="w-[25px] absolute ml-3 mt-2 opacity-25"
                src=''
                alt=""
              />
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
              <img
                className="w-[25px] absolute ml-3 mt-2 opacity-25"
                src=''
                alt=""
              />
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
              <img
                className="w-[25px] absolute ml-3 mt-2 opacity-25"
                src=''
                alt=""
              />
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
              <img
                className="w-[25px] absolute ml-3 mt-2 opacity-25"
                src=''
                alt=""
              />
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
              <img
                className="w-[25px] absolute ml-3 mt-2 opacity-25"
                src=''
                alt=""
              />
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
          <p className=''>already have an account ? <a href="">Sign in</a> </p>
          </div>
        
      </div>
    </div>
    </div>
      );
};

export default SignUp;