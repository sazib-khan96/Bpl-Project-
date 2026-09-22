import React from "react";
import logo from '../assets/logo.png'


const Navbar = ({availableBalance}) => {
  return (
   <div className="bg-amber-700 text-white">
     <div className=" justify-center bg-base-100 flex p-3 w-6xl  mx-auto">
      <div className="flex-1">
        
        <h1 className="btn btn-ghost text-xl">{logo}</h1>
      </div>
      <div className="flex">
        <h2>$ <span>{availableBalance}</span></h2>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
