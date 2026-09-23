import React from "react";
import FooterForm from "./FooterForm";
import footerImg from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start mb-8">
          <img className="w-24 h-auto" src={footerImg} alt="Footer Logo" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* About Us */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl mb-3 font-semibold">About Us</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl mb-3 font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Home</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Services</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">About</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Form Component */}
          <div className="w-full">
            <FooterForm />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;