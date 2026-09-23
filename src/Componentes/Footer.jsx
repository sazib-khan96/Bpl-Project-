import React from "react";
import FooterForm from "./FooterForm";
import footerImg from '../assets/logo-footer.png'

const Footer = () => {
  return (
    <div className='bg-black text-white py-8'>
      <div className=" md:w-6xl mx-auto px-3 py-5">
        <img className="w-[100px] mb-5" src={footerImg} alt="" />
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-[300px]">
            <h2 className="text-xl md:text-2xl mb-3 font-semibold">About Us</h2>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="text-left md:w-[400px] text-center">
            <h2 className="text-xl md:text-2xl mb-3 font-semibold">Quick Link</h2>
            <ul>
              <li className="hover:text-amber-100 cursor-pointer">Home</li>
              <li className="hover:text-amber-100 cursor-pointer">Services</li>
              <li className="hover:text-amber-100 cursor-pointer">About</li>
              <li className="hover:text-amber-100 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="w-[500px]">
            <FooterForm></FooterForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
