// src/components/Header.js
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <a href="/">YourCompany</a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-400">
                Blog
              </a>
            </li>
          </ul>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-6 shadow-lg z-10">
              <ul className="space-y-4">
                <li>
                  <a href="/about" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
