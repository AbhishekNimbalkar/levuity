import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-[40px] bg-[rgba(255,255,255,0.8)] border-b border-[rgba(242,242,242,1)] shadow-md">
      <div className="w-full text-gray-700">
        <div className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          {/* Logo and Mobile Menu Button */}
          <div className="flex flex-row items-center justify-between p-4">
            <p className="text-lg font-bold text-gray-900">Levuity</p>
            <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
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
          <nav className={`flex-col flex-grow ${isMenuOpen ? "flex" : "hidden"}  md:flex md:justify-end md:items-center md:flex-row`}>
            <p className="px-4 py-2 text-sm font-medium">Choose your way</p>
            <p
              className={`px-4 py-2 text-sm font-medium bg-[#2756FF] text-white rounded-lg cursor-pointer  ${isMenuOpen ? " mb-2 " : " mr-2 "}  `}
              onClick={() => navigate("/")}
            >
              Academics
            </p>
            <p
              className={`px-4 py-2 text-sm font-medium border-2 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer   ${isMenuOpen ? " mb-4 " : "mb-0"}  `}
              onClick={() => navigate("/skillbased")}
            >
              Skill Based
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
