export default function DealCard({ Image, Title, Price }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105">
      <img
        src={Image}
        alt={Title}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain mb-3"
      />

      {/* Title */}
      <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg">
        {Title}
      </p>

      {/* Price */}
      <h4 className="text-blue-600 font-bold text-base sm:text-lg md:text-xl">
        ${Price}
      </h4>
    </div>
  );
}
