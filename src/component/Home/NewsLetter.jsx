import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center h-auto py-12">
      <div className="px-6 md:px-16 lg:px-28 flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="flex flex-col justify-center w-full max-w-[1239px] text-center">
          <p className="text-[#344054] text-2xl md:text-3xl lg:text-[40px] font-inter font-medium leading-snug md:leading-[60px] lg:leading-[70px]">
            Drop your Gmail below for a chance to score 2 months of Premium access – on us,
            <span data-aos="fade-up" className="text-[#FD853A]"> totally free!</span>
          </p>
        </div>

        {/* Input Section */}
        <div className="flex items-center justify-between w-full max-w-lg p-2 rounded-full border border-gray-300 bg-white shadow-sm">
          {/* Icon Section */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M22.6667 5.16675H9.33341C5.33341 5.16675 2.66675 7.16675 2.66675 11.8334V21.1667C2.66675 25.8334 5.33341 27.8334 9.33341 27.8334H22.6667C26.6667 27.8334 29.3334 25.8334 29.3334 21.1667V11.8334C29.3334 7.16675 26.6667 5.16675 22.6667 5.16675ZM23.2934 13.2867L19.1201 16.6201C18.2401 17.3267 17.1201 17.6734 16.0001 17.6734C14.8801 17.6734 13.7467 17.3267 12.8801 16.6201L8.70675 13.2867C8.28008 12.9401 8.21341 12.3001 8.54675 11.8734C8.89341 11.4467 9.52008 11.3667 9.94675 11.7134L14.1201 15.0467C15.1334 15.8601 16.8534 15.8601 17.8667 15.0467L22.0401 11.7134C22.4667 11.3667 23.1067 11.4334 23.4401 11.8734C23.7867 12.3001 23.7201 12.9401 23.2934 13.2867Z"
                fill="#0062FF"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="email"
            placeholder="Enter Email Address"
            className="flex-1 outline-none px-4 py-2 bg-transparent text-gray-700 text-sm md:text-base"
          />

          {/* Send Button */}
          <button className="px-4 md:px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
