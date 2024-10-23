import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GreenboomLogo from "../../assets/Greenboom.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // State for mobile dropdown
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/home");
  };
  return (
    <header className="bg-gray-100 text-black sticky top-0 z-40 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-8">
        <div className="flex items-center mr-10">
          <img
            onClick={handleLogo}
            src={GreenboomLogo}
            alt="App Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/science" className="hover:text-primaryA">
            SCIENCE
          </Link>
          <Link to="/products" className="hover:text-primaryA">
            PRODUCTS
          </Link>
          <Link to="/news" className="hover:text-primaryA">
            NEWS
          </Link>
          <Link to="/instructions" className="hover:text-primaryA">
            INSTRUCTIONS
          </Link>

          {/* Dropdown for ABOUT in desktop view */}
          <div className="relative group">
            <Link
              to="/about"
              className="hover:text-primaryA"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              ABOUT
            </Link>

            <div
              className={`absolute left-0 mt-0.5 w-40 bg-white shadow-lg rounded-md transition-opacity duration-200 ease-in-out ${
                isAboutDropdownOpen
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link
                to="/team"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Team
              </Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-primaryA">
            CONTACT
          </Link>
          <Link to="/login" className="hover:text-gray-400 text-primaryA">
            LOGIN
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primaryA hover:text-primaryA focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link to="/science" className="hover:text-primaryA">
              SCIENCE
            </Link>
            <Link to="/products" className="hover:text-primaryA">
              PRODUCTS
            </Link>
            <Link to="/news" className="hover:text-primaryA">
              NEWS
            </Link>
            <Link to="/instructions" className="hover:text-primaryA">
              INSTRUCTIONS
            </Link>

            {/* Dropdown for ABOUT in mobile view */}
            <div className="relative">
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} // Toggle dropdown on click
                className="hover:text-primaryA"
              >
                ABOUT
              </button>

              {/* Dropdown content for mobile */}
              {isAboutDropdownOpen && (
                <div className="absolute left-0 mt-0.5 w-40 bg-white shadow-lg rounded-md">
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsAboutDropdownOpen(false)} // Close dropdown when a link is clicked
                  >
                    Team
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-primaryA">
              CONTACT
            </Link>
            <Link to="/login" className="hover:text-gray-400 text-primaryA">
              LOGIN
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
