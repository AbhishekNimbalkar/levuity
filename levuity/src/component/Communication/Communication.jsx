import React from "react";
import Navbar from "./Navbar";
import Activity from "./Activity";
import Discussion from "./Discussion";

const Communication = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full h-full">
        
        {/* Discussion - takes 75% width on medium+ screens */}
        <div className="w-full md:w-[75%] h-[50%] md:h-full overflow-auto p-2">
          <Discussion />
        </div>

        {/* Activity - takes 25% width on medium+ screens */}
        <div className="w-full md:w-[25%] h-[50%] md:h-full overflow-auto">
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Communication;
