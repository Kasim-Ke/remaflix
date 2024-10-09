import { Link } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="w-full h-[80px] z-10   mx-auto">
      <div className="flex  justify-between items-center">
        <h1 className="text-[#B8001F] md:text-[48px] text-4xl font-extrabold m-5 cursor-pointer">
          RE<span className="md:text-6xl text-5xl ">MA</span>FLIX
        </h1>
        <div className="text-white text-[19px] md:block hidden ">
          <button className=" py-2 px-5 mx-5 border hover:opacity-65 duration-200  ">
            <Link to="/login">Log In</Link>
          </button>
          <button className="py-2 px-5  mr-5 border-[#B8001F]  bg-[#B8001F] hover:opacity-65 duration-200">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
        <div className="mx-5 md:hidden block ">
          <Link to="/login" className="hover:text-gray-500">
            <IoMenu color="white" size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};
