import React from "react";
import Logo from "../assets/images/Lizabeth Logo.png";
import Search from "../assets/icons/search-icon.png";
import Cart from "../assets/icons/cart.png";
import Profile from "../assets/icons/profile.png";

export default function Header() {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-24" />
      </div>
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          Products
        </a>
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </div>
      <div className="flex gap-4">
        <img src={Search} alt="search-icon" className="w-5 cursor-pointer" />
        <img src={Cart} alt="cart-icon" className="w-5 cursor-pointer" />
        <img src={Profile} alt="profile-icon" className="w-5 cursor-pointer" />
      </div>
    </div>
  );
}
