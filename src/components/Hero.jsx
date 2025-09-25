import React from "react";
import Explorer from "../assets/images/music-man.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 py-12">
      <div className="max-w-xl mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          ELEVATE YOUR AUDIO EXPERIENCE TODAY
        </h1>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Quality sounds produced</li>
          <li>Active noise cancellation</li>
          <li>Seamless connectivity</li>
          <li>Sleek modern designs</li>
          <li>Long battery life</li>
        </ul>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
      <div>
        <img
          src={Explorer}
          alt="hero"
          className="w-full max-w-md rounded shadow-lg"
        />
      </div>
    </div>
  );
}
