import React from "react";
import Logo from "../assets/images/Lizabeth Logo.png";
import Search from "../assets/icons/search-icon.png";
import Cart from "../assets/icons/cart.png";
import Profile from "../assets/icons/profile.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="icons">
        <img src={Search} alt="search-icon" />
        <img src={Cart} alt="cart-icon" />
        <img src={Profile} alt="profile-icon" />
      </div>
    </div>
  );
}
