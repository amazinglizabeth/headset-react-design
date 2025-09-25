import React from "react";

export default function DealCard({ Image, Title, Price }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img src={Image} alt={Title} className="w-32 h-32 object-contain mb-3" />
      <p className="text-gray-700 font-medium">{Title}</p>
      <h4 className="text-blue-600 font-bold text-lg">${Price}</h4>
    </div>
  );
}
