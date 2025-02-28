
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleAcademicsClick = () => {
    navigate("/");
  };

  const handleSkillBasedClick = () => {
    navigate("/skillbased");
  };

  return (
    <div className="">
      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col  px-4 border-b-[1px] mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            {/* Logo and Mobile Menu Button */}
            <div className="flex flex-row items-center justify-between p-4">
              <p
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-inter font-bold text-gray-900  rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Levuity
              </p>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={toggleMenu}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  {!isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              className={`flex-col flex-grow ${
                isMenuOpen ? "flex" : "hidden"
              } pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
            >
              
              <p
                className="px-4 py-2 mt-2 text-sm font-medium font-inter  dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900  focus:outline-none focus:shadow-outline"
                href="#"
              >
                Choose your way
              </p>
              <p
                className="px-4 py-2 mt-2 text-sm font-medium font-inter bg-[#2756FF] text-white rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                onClick={handleAcademicsClick}
              >
                Academics
              </p>
              <p
                className="px-4 py-2 mt-2 text-sm font-medium border-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
                onClick={handleSkillBasedClick}
              >
                Skill Based
              </p>

              
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;