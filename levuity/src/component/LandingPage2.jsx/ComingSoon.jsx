
import React from "react";
import comingsoon from "../../assets/comingsoon.png";

const ComingSoon = () => {
  return (
    <div className="flex w-full h-screen justify-center px-6 py-6 bg-white">
      {/* Image Container */}
      <div className="relative w-full max-w-5xl h-[612px] overflow-hidden rounded-xl">
        <img
          src={comingsoon}
          alt="Coming Soon"
          className="w-full h-full object-cover rounded-xl  "
        />
      </div>
    </div>
  );
};

export default ComingSoon;
