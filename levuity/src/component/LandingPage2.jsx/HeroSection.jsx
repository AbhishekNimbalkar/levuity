import React, { useState } from "react";
import landingpage2 from "../../assets/landingpage2.png";
import Form from "../Form/Form";

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    setShowForm(true);
  };

  return (
    <div className="px-16 flex h-[70vh] mt-20 items-center relative">
      {/* Left Section - Heading and Button */}
      <div className="w-1/2 flex flex-col space-y-6">
        <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-[#0062FF] leading-tight">
          The Future of Learning
          <br />
          and Collaboration is
          <br />
          Just Around the
          <br />
          Corner.
        </h1>
        <div className="flex flex-col space-y-4">
          <p className="font-inter font-bold text-xl">About Levuity</p>
          <button
            className="px-6 py-3 text-base font-medium font-inter bg-[#2756FF] text-white rounded-lg w-fit"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src={landingpage2}
          alt="Collaboration illustration"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Render Form Modal */}
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default HeroSection;
