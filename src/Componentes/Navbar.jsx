import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="bg-amber-500 text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto p-3 px-4 sm:px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer" 
            src={logo} 
            alt="Cricket Squad Logo" 
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
            Select Your Cricket Squad
          </h1>
        </div>

        {/* Balance Display */}
        <div className="flex items-center bg-amber-600/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-amber-400/50 shadow-inner">
          <span className="text-base sm:text-xl font-bold text-white">
            ${availableBalance}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;