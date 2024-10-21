import React, { useState, useEffect } from "react";
import carousal1 from "../../assets/contact/carousal1.jpg";
import carousal2 from "../../assets/contact/carousal2.jpg";
import carousal3 from "../../assets/contact/carousal3.jpg";
import carousal4 from "../../assets/contact/carousal4.jpg";
import carousal5 from "../../assets/contact/carousal5.jpg";

const images = [
  { src: carousal1, alt: "Image 1" },
  { src: carousal2, alt: "Image 2" },
  { src: carousal3, alt: "Image 3" },
  { src: carousal4, alt: "Image 4" },
  { src: carousal5, alt: "Image 5" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full h-[600px] object-cover"
      />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 z-10 p-2 bg-gray-700 text-white rounded-full transform -translate-y-1/2 hover:bg-gray-600 transition"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 z-10 p-2 bg-gray-700 text-white rounded-full transform -translate-y-1/2 hover:bg-gray-600 transition"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
