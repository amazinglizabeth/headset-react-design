import Explorer from "../assets/images/music-man.jpg";

export default function Hero() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${Explorer})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative p-8 text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-snug">
          Immerse Yourself In Premium Sound
        </h1>
        <p className="text-white text-lg sm:text-xl mb-8">
          Experience music like never before with headphones crafted for
          clarity, comfort, and style. Block out distractions, feel every note,
          and take your audio journey to the next level.
        </p>
        <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}
