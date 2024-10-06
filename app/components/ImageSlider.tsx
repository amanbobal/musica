"use client";

import React, { useState } from "react";

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
  "https://via.placeholder.com/600x400?text=Image+4",
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2">
        <button
          onClick={prevImage}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
