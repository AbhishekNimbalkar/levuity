import React, { useContext, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import epicker from "../../../assets/epicker.png"; // Corrected import path
import { MessageContext } from "../MessageContext";

const Chat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const { message, setMessage } = useContext(MessageContext);

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji.native); // Add emoji to input field
  };

  return (
    <div className="p-2 w-full">
      <div className="flex items-center space-x-2 relative w-full">
        {/* Emoji Picker Button */}
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="text-white font-semibold p-2 rounded-full "
        >
          <img src={epicker} alt="Emoji Picker" className="w-6 h-6" />
        </button>

        {/* Input Field */}
        <input
          type="text"
          className="flex-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="bg-[#0062FF] hover:bg-[#0062ffea] text-white font-bold py-2 px-4 rounded-3xl">
          ?
        </button>

        {/* Inline Buttons */}
        <div className="flex">
          <button className="bg-[#0062FF] hover:bg-[#0062ffea] text-white font-bold py-2 px-3 rounded-l-3xl">
            =
          </button>
          <button className="bg-[#0062FF] hover:bg-[#0062ffea] text-white font-bold py-2 px-3 rounded-r-3xl">
            =
          </button>
        </div>

        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute top-12 right-0 z-10">
            <Picker
              data={data}
              onEmojiSelect={handleEmojiSelect}
              theme="light"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
