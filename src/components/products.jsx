import React from "react";
import Headphone from "../assets/images/headphone.png";
import Earpod from "../assets/images/earpods.png";
import Mouse from "../assets/images/mouse.png";

export default function products() {
  return (
    <div className="products">
      <h3>Our Products</h3>
      <div className="product-pic">
        <img src={Headphone} alt="headphone" />
        <div className="product-pic2">
          <img src={Earpod} alt="earpod" />
          <img src={Mouse} alt="mouse" />
        </div>
      </div>
    </div>
  );
}
