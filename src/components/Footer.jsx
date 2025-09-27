import Logo from "../assets/images/Lizabeth Logo.png";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gray-100 py-10 px-6 text-gray-700">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={Logo}
          alt="logo"
          className="w-10 sm:w-10
        "
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* Left (Newsletter + Socials) */}
        <div className="md:w-1/2">
          <p className="text-lg font-medium">Subscribe to our newsletter</p>
          <div className="flex flex-col sm:flex-row mt-3 gap-3 sm:gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-3 py-2 w-full sm:w-64"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          <p className="mt-5 font-medium">Follow us on</p>
          <div className="flex gap-5 text-2xl mt-2">
            <a href="#" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagramSquare />
            </a>
            <a href="#" className="hover:text-black">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Right (Links) */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:w-1/2">
          <div>
            <p className="font-bold mb-2">Useful Links</p>
            <ul className="space-y-1 text-sm sm:text-base">
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
            <ul className="space-y-1 text-sm sm:text-base">
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

      {/* Bottom */}
      <p className="text-center text-sm mt-10">
        &copy; 2024 All rights reserved
      </p>
    </div>
  );
}
