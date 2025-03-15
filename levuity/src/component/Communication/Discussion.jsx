// import React, { useState } from "react";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";
// import epicker from "../../assets/epicker.png"; // Correct the import path

// const Discussion = () => {
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleEmojiSelect = (emoji) => {
//     console.log(emoji);
//     // You can also handle the selected emoji here, e.g., add it to an input field
//   };

//   return (
//     <div className="p-4">
//       <div className="flex items-center space-x-2">
        
//         <button
//           onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//           className="  text-white font-semibold p-2 rounded-full"
//         >
//           <img src={epicker} alt="Emoji Picker" className="w-6 h-6" /> {/* Use the image here */}
//         </button>
//         <input
//           type="text"
//           className="flex-1   p-2"
//           placeholder="Type your message..."
//         />
//         {showEmojiPicker && (
//         <div className="absolute mt-2">
//           <Picker data={data} onEmojiSelect={handleEmojiSelect} />
//         </div>
//       )}

//       <div className="inline-flex mt-4">
//         <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
//           =
//         </button>
//         <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
//           =
//         </button>
//       </div>
//       </div>

      
//     </div>
//   );
// };

// export default Discussion;










// import React, { useState } from "react";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";
// import epicker from "../../assets/epicker.png"; // Corrected import path

// const Discussion = () => {
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleEmojiSelect = (emoji) => {
//     setMessage((prev) => prev + emoji.native); // Add emoji to input field
//   };

//   return (
//     <div className="p-2 w-full border border-[#B9BBBE] rounded-2xl">
//       <div className="flex items-center space-x-2 relative w-full">
//         {/* Emoji Picker Button */}
//         <button
//           onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//           className="text-white font-semibold p-2 rounded-full "
//         >
//           <img src={epicker} alt="Emoji Picker" className="w-6 h-6" />
//         </button>

//         {/* Input Field */}
//         <input
//           type="text"
//           className="flex-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Type your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />

// <button className="bg-[#0062FF] hover:bg-[#0062ffea] text-white font-bold py-2 px-4 rounded-3xl">
//             ?
//           </button>

//         {/* Inline Buttons */}
//         <div className="flex">
        
//           <button className="bg-[#0062FF] hover:bg-[#0062ffea] text-white font-bold py-2 px-3 rounded-l-3xl">
//             =
//           </button>
//           <button className="bg-[#0062FF] hover:bg-[#0062ffea] text-white font-bold py-2 px-3 rounded-r-3xl">
//             =
//           </button>
//         </div>

//         {/* Emoji Picker */}
//         {showEmojiPicker && (
//           <div className="absolute top-12 right-0 z-10">
//             <Picker data={data} onEmojiSelect={handleEmojiSelect} theme="light" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Discussion;


import React from 'react';
import Chat from './Discussion/Chat';
import ChatSection1 from './Discussion/ChatSection1';
import { MessageProvider } from './MessageContext';

const Discussion = () => {
  return (
    <MessageProvider>
      {/* Main container with flex layout */}
      <div className="flex flex-col w-full h-full">
        
        {/* First div taking 30% of the screen */}
        <div className="w-full  h-[80%]">
          {/* Placeholder for the second section */}
          <p className="p-4">Latest Discussion</p>
        </div>

        {/* Second div taking 70% of the screen */}
        <div className="w-full  border border-[#B9BBBE] rounded-2xl ">
          <ChatSection1 />
          <Chat />
        </div>
      </div>
    </MessageProvider>
  );
};

export default Discussion;