import Explorer from "../assets/images/music-man.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 py-12">
      {/* Left Section */}
      <div className="max-w-xl mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          ELEVATE YOUR AUDIO EXPERIENCE TODAY
        </h1>
        <ul className="list-disc pl-6 sm:pl-10 text-gray-700 space-y-2 mb-6 text-sm sm:text-base">
          <li>Quality sounds produced</li>
          <li>Active noise cancellation</li>
          <li>Seamless connectivity</li>
          <li>Sleek modern designs</li>
          <li>Long battery life</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src={Explorer}
          alt="hero"
          className="w-full max-w-sm sm:max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
