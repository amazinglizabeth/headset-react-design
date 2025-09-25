import React from "react";
import Headphone from "../assets/images/headphone.png";
import Earpod from "../assets/images/earpods.png";
import Mouse from "../assets/images/mouse.png";

export default function Products() {
  return (
    <div className="py-10 px-4 text-center">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Our Products
      </h3>
      <div className="flex flex-col items-center gap-6">
        <img src={Headphone} alt="headphone" className="w-40" />
        <div className="flex gap-6">
          <img src={Earpod} alt="earpod" className="w-32" />
          <img src={Mouse} alt="mouse" className="w-32" />
        </div>
      </div>
    </div>
  );
}
