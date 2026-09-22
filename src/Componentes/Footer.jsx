import React from "react";
import FooterForm from "./FooterForm";
import footerImg from '../assets/logo-footer.png'

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="w-6xl mx-auto px-3 py-5">
        <img className="w-[100px] mb-5" src={footerImg} alt="" />
        <div className="flex gap-3">
          <div className="w-[300px]">
            <h2>About Us</h2>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="w-[400px] text-center">
            <h2>Quick Linka</h2>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
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
