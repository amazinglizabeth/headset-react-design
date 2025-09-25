import React from "react";
import Global from "../assets/images/global.png";
import Money from "../assets/images/money.png";
import Warranty from "../assets/images/warranty.png";
import Support from "../assets/images/support.png";

export default function Info() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 px-6 py-12 bg-gray-50 text-center">
      {/* Worldwide Shipping */}
      <div className="flex flex-col items-center">
        <img
          src={Global}
          alt="global"
          className="w-12 h-12 sm:w-14 sm:h-14 mb-3"
        />
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-snug">
          Worldwide
          <br /> Shipping
        </p>
      </div>

      {/* Moneyback Guarantee */}
      <div className="flex flex-col items-center">
        <img
          src={Money}
          alt="money"
          className="w-12 h-12 sm:w-14 sm:h-14 mb-3"
        />
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-snug">
          Moneyback
          <br /> Guarantee
        </p>
      </div>

      {/* Warranty */}
      <div className="flex flex-col items-center">
        <img
          src={Warranty}
          alt="warranty"
          className="w-12 h-12 sm:w-14 sm:h-14 mb-3"
        />
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-snug">
          Hassle-free
          <br /> Warranty
        </p>
      </div>

      {/* Customer Support */}
      <div className="flex flex-col items-center">
        <img
          src={Support}
          alt="support"
          className="w-12 h-12 sm:w-14 sm:h-14 mb-3"
        />
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-snug">
          Online
          <br /> Customer-service
        </p>
      </div>
    </div>
  );
}
