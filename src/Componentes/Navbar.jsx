import React from "react";
import logo from '../assets/logo.png';


const Navbar = ({availableBalance}) => {
  return (
   <div className="bg-amber-500 text-white sticky top-0 z-50 ">
     <div className="flex justify-between w-[100%] md:justify-between max-w-[1200px] bg-base-100 p-3 mx-auto items-center">
      <div className="">
        <img className=" md:btn btn-ghost text-xl" src={logo} alt="" />
      </div>
      <div>
        <h1 className="text-xl md:text-white font-bold text-2xl">Select Your Cricket Squad</h1>
      </div>
      <div className="text-xl md:flex text-2xl font-bold">
        <h2>$ <span>{availableBalance}</span></h2>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
