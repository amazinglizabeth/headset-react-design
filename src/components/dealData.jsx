import React from "react";
import Headset from "../assets/images/headset.png";
import AirpodPro from "../assets/images/airpodPro.png";
import ElectonicMouse from "../assets/images/electronicMouse.png";
import AirpodPro2 from "../assets/images/airpodPro2.png";
import Airpods from "../assets/images/Airpod.png";
import wirelessMouse from "../assets/images/wirelessMouse.png";
import DealCard from "./dealCard";

const productData = [
  {
    Image: Headset,
    Title: "Amazing Comfy Headset",
    Price: 45,
  },
  {
    Image: AirpodPro,
    Title: "Amazing Airpod Pro",
    Price: 28,
  },
  {
    Image: ElectonicMouse,
    Title: "Amazing Gaming Mouse",
    Price: 60,
  },
  {
    Image: AirpodPro2,
    Title: "Amazing Airpod Pro 2",
    Price: 35,
  },
  {
    Image: Airpods,
    Title: "Amazing Airpods",
    Price: 20,
  },
  {
    Image: wirelessMouse,
    Title: "Amazing Wireless Mouse",
    Price: 60,
  },
];

export default function DealData() {
  return (
    <>
      <h3 className="dealsHeading">Top Deals</h3>
      <div className="topDeals">
        {productData.map((product) => (
          <DealCard
            Image={product.Image}
            Title={product.Title}
            Price={product.Price}
          />
        ))}
      </div>
    </>
  );
}
