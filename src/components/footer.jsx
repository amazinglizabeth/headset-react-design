import React from "react";
import Logo from "../assets/images/Lizabeth Logo.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-10 px-6 text-gray-700">
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="text-lg font-medium">Subscribe to our newsletter</p>
          <div className="flex mt-3 gap-2">
            <input
              type="text"
              placeholder="eadenike14@gmail.com"
              className="border border-gray-300 rounded px-3 py-2 w-full md:w-64"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
          <p className="mt-4 font-medium">Follow us on</p>
          <div className="flex gap-4 text-xl mt-2">
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
        <div className="flex gap-16">
          <div>
            <p className="font-bold mb-2">Useful Links</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Products category
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Special promo
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Offline stores
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-2">Support</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-8">&copy; copyright 2024</p>
    </div>
  );
}
