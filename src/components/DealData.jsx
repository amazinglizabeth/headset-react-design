import Headset from "../assets/images/headset.png";
import AirpodPro from "../assets/images/airpodPro.png";
import ElectonicMouse from "../assets/images/electronicMouse.png";
import AirpodPro2 from "../assets/images/airpodPro2.png";
import Airpods from "../assets/images/Airpod.png";
import wirelessMouse from "../assets/images/wirelessMouse.png";
import DealCard from "./DealCard";

const productData = [
  { Image: Headset, Title: "Amazing Comfy Headset", Price: 45 },
  { Image: AirpodPro, Title: "Amazing Airpod Pro", Price: 28 },
  { Image: ElectonicMouse, Title: "Amazing Gaming Mouse", Price: 60 },
  { Image: AirpodPro2, Title: "Amazing Airpod Pro 2", Price: 35 },
  { Image: Airpods, Title: "Amazing Airpods", Price: 20 },
  { Image: wirelessMouse, Title: "Amazing Wireless Mouse", Price: 60 },
];

export default function DealData() {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-gray-800">
        Top Deals
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product, index) => (
          <DealCard
            key={index}
            Image={product.Image}
            Title={product.Title}
            Price={product.Price}
          />
        ))}
      </div>
    </div>
  );
}
