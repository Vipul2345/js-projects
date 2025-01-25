import React, { useState } from "react";
import { Link, NavLink } from "react-router";

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
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-white-600"
              }
            >
              Home
            </NavLink>
          </li>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-white-600"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-white-600"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-white-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
