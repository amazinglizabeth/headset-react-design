import React from "react";
import Logo from "../assets/images/Lizabeth Logo.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footerWrapper">
      <img src={Logo} alt="logo" />
      <div className="footer">
        <div className="newsletter">
          <p>Suscribe to our newsletter</p>
          <div className="subscription">
            <input type="text" placeholder="eadenike14@gmail.com" />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <p>Follow us on</p>
          <div className="socials">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="services">
          <div className="links">
            <p>Useful Links</p>
            <a href="#">Products category</a>
            <a href="#">Special promo</a>
            <a href="#">Affliate products</a>
            <a href="#">Offline stores</a>
          </div>
          <div className="links">
            <p>Support</p>
            <a href="#">FAQS</a>
            <a href="#">Support centre</a>
            <a href="#">Help centre</a>
            <a href="#">Join us</a>
          </div>
        </div>
      </div>
      <p className="copyright">&copy; copyright 2024</p>
    </div>
  );
}
