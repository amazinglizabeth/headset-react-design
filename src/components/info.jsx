import React from "react";
import Global from "../assets/images/global.png";
import Money from "../assets/images/money.png";
import Warranty from "../assets/images/warranty.png";
import Support from "../assets/images/support.png";

export default function Info() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 py-10 bg-gray-50 text-center">
      <div className="flex flex-col items-center">
        <img src={Global} alt="global" className="w-12 h-12 mb-2" />
        <p className="text-sm font-medium text-gray-700">
          Worldwide
          <br /> Shipping
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Money} alt="money" className="w-12 h-12 mb-2" />
        <p className="text-sm font-medium text-gray-700">
          Moneyback
          <br /> Guarantee
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Warranty} alt="warranty" className="w-12 h-12 mb-2" />
        <p className="text-sm font-medium text-gray-700">
          Hassle-free
          <br /> Warranty
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img src={Support} alt="support" className="w-12 h-12 mb-2" />
        <p className="text-sm font-medium text-gray-700">
          Online
          <br /> Customer-service
        </p>
      </div>
    </div>
  );
}
