import { useState } from "react";
import line from "../../assets/Home/line.svg";
import { PRODUCTS_DATA } from "../../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Recomendations() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    if (startIndex + itemsToShow < PRODUCTS_DATA.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="ml-56 mr-56 mt-28">
      <img src={line} alt="" width={1000} height={12} />

      {/* added below */}
      <div className="carousel-container pt-10">
        <button
          onClick={handlePrevious}
          className="nav-button prev-button"
          disabled={startIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <div className="carousel">
          {PRODUCTS_DATA.slice(startIndex, startIndex + itemsToShow).map(
            (product) => (
              <div key={product.id} className="product-card">
                <div
                  className="usage"
                  style={{ backgroundColor: "#9CA3AF", color: "white" }}
                >
                  {product.usage}
                </div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-name">{product.name}</h3>
              </div>
            )
          )}
        </div>
        <button
          onClick={handleNext}
          className="nav-button next-button"
          disabled={startIndex + itemsToShow >= PRODUCTS_DATA.length}
        >
          <FaChevronRight />
        </button>
        <style jsx>{`
          .carousel-container {
            display: flex;
            align-items: center;
            justify-content: center; /* Center align carousel */
          }
          .carousel {
            display: flex;
            overflow: hidden; /* Hide overflow to prevent scrolling */
            width: 100%; /* Adjust as needed */
            margin: 0 10px; /* Space between buttons and carousel */
          }
          .product-card {
            min-width: 200px; /* Adjust width of each card */
            margin: 10px; /* Space between cards */
            position: relative; /* For positioning usage div */
          }
          .usage {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: rgba(
              255,
              255,
              255,
              0.8
            ); /* Background for usage */
            padding: 5px;
            border-radius: 5px; /* Rounded corners */
          }
          .product-image {
            width: 100%; /* Responsive image */
            height: auto; /* Maintain aspect ratio */
          }
          .product-name {
            text-align: center;
            margin-top: 10px; /* Space between image and name */
          }
          .nav-button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 24px;
            color: #a1a1aa; /* Button color */
            transition: color 0.3s;
          }
          .nav-button:hover {
            color: #0056b3; /* Hover effect */
          }
          .nav-button:disabled {
            color: #ccc;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Recomendations;
