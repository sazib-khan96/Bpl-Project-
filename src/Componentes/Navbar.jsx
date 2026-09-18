import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-base-100 flex p-3 w-6xl  mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex">
        <h2>$ <span>0000</span></h2>
      </div>
    </div>
  );
};

export default Navbar;
