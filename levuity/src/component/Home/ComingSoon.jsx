// import React from 'react'
// import comingsoon from '../../assets/comingsoon.png'

// const ComingSoon = () => {
//   return (
//     <div className="flex w-full items-start  px-4 py-6 bg-white transition-shadow duration-300 relative">
//       {/* Image Container */}
//       <div className="relative w-full">
//         <img
//           src={comingsoon} // Replace with your image URL
//           alt="Coming Soon"
//           className="w-full h-48 object-cover rounded-xl"
//         />
        
//         {/* Overlay Text */}
//         {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
//           <span className="text-white text-xl font-bold">Coming Soon</span>
//         </div> */}
//       </div>
//     </div>
//   )
// }

// export default ComingSoon

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
