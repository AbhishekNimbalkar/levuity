import React from "react";

const UserComponent = () => {
  return (
    <div 
      className="relative flex items-center gap-4 px-6 py-2 rounded-full"
      style={{ 
        backgroundColor: "rgba(0, 98, 255, 0.16)", // Light blue background
        paddingRight: "3rem" // Extra padding to prevent text overlap
      }}
    > 
      {/* User Info (Left) */}
      <div>
        <h6 className="text-[#0062FF] font-semibold text-sm">#FormulaFreak</h6>
      </div>

      {/* User Avatar Positioned at the Right Border (Vertically Centered) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="User Avatar"
          className="w-12 h-12 object-cover object-center rounded-full"
          style={{ 
            border: "3px solid white", // White border
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Soft shadow
          }}
        />
      </div>
    </div>
  );
};

export default UserComponent;
