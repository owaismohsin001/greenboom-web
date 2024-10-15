// src/components/Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import GreenboomLogo from "../../assets/Greenboom.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100  text-black">
      <div className="container mx-3 flex justify-between items-center p-8">
        <div className="flex items-center mr-10">
          <img src={GreenboomLogo} alt="App Logo" className="h-10 w-180" />
        </div>
        <nav className="hidden md:flex space-x-36 ">
          <Link to="/home" className="hover:text-primaryA">
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
          <Link to="/about" className="hover:text-primaryA">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:text-primaryA">
            CONTACT
          </Link>
          <Link to="/login" className="hover:text-gray-400 text-primaryA">
            LOGIN
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primaryA hover:text-primayA focus:outline-none focus:text-primaryA"
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
            <Link to="/about" className="hover:text-primaryA">
              ABOUT
            </Link>
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
