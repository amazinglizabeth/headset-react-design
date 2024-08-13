import React from "react";
import Global from "../assets/images/global.png";
import Money from "../assets/images/money.png";
import Warranty from "../assets/images/warranty.png";
import Support from "../assets/images/support.png";

export default function Info() {
  return (
    <div className="info">
      <div className="about">
        <img src={Global} alt="global" />
        <p>
          Worldwide
          <br /> Shipping
        </p>
      </div>
      <div className="about">
        <img src={Money} alt="money" />
        <p>
          Moneyback
          <br />
          Guarantee
        </p>
      </div>
      <div className="about">
        <img src={Warranty} alt="warranty" />
        <p>
          Hassle-free
          <br />
          Warranty
        </p>
      </div>
      <div className="about">
        <img src={Support} alt="support" />
        <p>
          Online
          <br />
          Cutomer-service
        </p>
      </div>
    </div>
  );
}
