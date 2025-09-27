import Headphone from "../assets/images/headphone.png";
import Earpod from "../assets/images/earpods.png";
import Mouse from "../assets/images/mouse.png";

export default function Products() {
  return (
    <div className="py-12 px-6 text-center bg-white">
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-10">
        Our Products
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        <div className="flex flex-col items-center">
          <img src={Headphone} alt="headphone" className="w-40 sm:w-48 mb-4" />
          <p className="text-sm sm:text-base font-medium text-gray-700">
            Headphones
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={Earpod} alt="earpod" className="w-32 sm:w-40 mb-4" />
          <p className="text-sm sm:text-base font-medium text-gray-700">
            Earpods
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src={Mouse} alt="mouse" className="w-32 sm:w-40 mb-4" />
          <p className="text-sm sm:text-base font-medium text-gray-700">
            Wireless Mouse
          </p>
        </div>
      </div>
    </div>
  );
}
