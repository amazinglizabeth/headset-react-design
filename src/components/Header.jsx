import React, { useState } from "react";
import Logo from "../assets/images/Lizabeth Logo.png";
import Search from "../assets/icons/search-icon.png";
import Cart from "../assets/icons/cart.png";
import Profile from "../assets/icons/profile.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-24" />
      </div>

      {/* Desktop Menu */}
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

      {/* Icons + Hamburger */}
      <div className="flex items-center gap-4">
        <img src={Search} alt="search-icon" className="w-5 cursor-pointer" />
        <img src={Cart} alt="cart-icon" className="w-5 cursor-pointer" />
        <img src={Profile} alt="profile-icon" className="w-5 cursor-pointer" />

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden flex flex-col gap-[4px] ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden z-50">
          <a href="#" className="py-2 w-full border-b hover:text-blue-600">
            Home
          </a>
          <a href="#" className="py-2 w-full border-b hover:text-blue-600">
            Products
          </a>
          <a href="#" className="py-2 w-full border-b hover:text-blue-600">
            About
          </a>
          <a href="#" className="py-2 w-full hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
