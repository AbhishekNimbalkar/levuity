import React, { useContext } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import epicker from "../../../assets/epicker.png"; // Corrected import path
import Group4 from "../../../assets/Group4.svg";
import Group5 from "../../../assets/Group5.svg";
import { MessageContext } from "../MessageContext";

const ChatSection1 = () => {
  const { setMessage } = useContext(MessageContext);

  const handleTextClick = () => {
    setMessage("This diagram should be of great help to you.");
  };

  const handleAddOnClick = (addOnText) => {
    setMessage(addOnText); // Set the message to the clicked add-on text
  };

  return (
    <div className="p-2 w-full bg-[#F1F6FE] rounded-t-2xl">
      {/* Parent flex container */}
      <div className="flex items-center justify-between w-full">
        {/* Left section: Emoji button and text */}
        <div className="flex items-center space-x-2 flex-1">
          {/* Emoji Picker Button */}
          <button className="text-white font-semibold p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
            >
              <mask
                id="mask0_472_5193"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="27"
                height="28"
              >
                <path
                  d="M0.951172 27.6109V0.973633H26.2905V27.6109H0.951172Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_472_5193)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.2908 14.284C26.2908 21.6442 20.613 27.6109 13.6093 27.6109C6.6055 27.6109 0.927734 21.6442 0.927734 14.284C0.927734 6.92375 6.6055 0.957031 13.6093 0.957031C20.613 0.957031 26.2908 6.92375 26.2908 14.284Z"
                  fill="#4C5665"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.91585 20.7744L7.03658 21.9522C7.11019 22.0296 7.19758 22.0909 7.29376 22.1328C7.38994 22.1747 7.49304 22.1963 7.59715 22.1963C7.70126 22.1963 7.80435 22.1747 7.90054 22.1328C7.99672 22.0909 8.08411 22.0296 8.15771 21.9522L16.5644 13.1177L14.3225 10.7617L5.91585 19.5962C5.84222 19.6736 5.78381 19.7654 5.74396 19.8665C5.70411 19.9676 5.68359 20.0759 5.68359 20.1853C5.68359 20.2947 5.70411 20.4031 5.74396 20.5041C5.78381 20.6052 5.84222 20.6971 5.91585 20.7744Z"
                fill="#FFFFFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8062 7.22845C18.7326 7.15107 18.6452 7.08969 18.549 7.04781C18.4528 7.00593 18.3497 6.98438 18.2456 6.98438C18.1415 6.98438 18.0384 7.00593 17.9422 7.04781C17.846 7.08969 17.7586 7.15107 17.685 7.22845L14.8828 10.1733L17.1247 12.5292L19.9269 9.58441C20.0005 9.50706 20.0589 9.41522 20.0988 9.31414C20.1386 9.21307 20.1592 9.10473 20.1592 8.99532C20.1592 8.8859 20.1386 8.77757 20.0988 8.67649C20.0589 8.57541 20.0005 8.48357 19.9269 8.40622L18.8062 7.22845Z"
                fill="#FFFFFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.05157 8.6875C8.89391 8.6875 8.74271 8.75332 8.63123 8.87047C8.51975 8.98762 8.45712 9.14652 8.45712 9.3122V10.1189H8.03585C7.95779 10.1189 7.88049 10.1351 7.80837 10.1664C7.73625 10.1978 7.67071 10.2439 7.61552 10.3019C7.56032 10.3599 7.51653 10.4287 7.48666 10.5045C7.45678 10.5803 7.44141 10.6616 7.44141 10.7436C7.44141 10.8256 7.45678 10.9069 7.48666 10.9827C7.51653 11.0585 7.56032 11.1273 7.61552 11.1853C7.67071 11.2433 7.73625 11.2894 7.80837 11.3207C7.88049 11.3521 7.95779 11.3683 8.03585 11.3683H8.45712V12.6439C8.45712 12.8096 8.51975 12.9685 8.63123 13.0857C8.74271 13.2028 8.89391 13.2686 9.05157 13.2686C9.20922 13.2686 9.36042 13.2028 9.4719 13.0857C9.58338 12.9685 9.64601 12.8096 9.64601 12.6439V11.3683H10.0673C10.1453 11.3683 10.2226 11.3521 10.2948 11.3207C10.3669 11.2894 10.4324 11.2433 10.4876 11.1853C10.5428 11.1273 10.5866 11.0585 10.6165 10.9827C10.6463 10.9069 10.6617 10.8256 10.6617 10.7436C10.6617 10.6616 10.6463 10.5803 10.6165 10.5045C10.5866 10.4287 10.5428 10.3599 10.4876 10.3019C10.4324 10.2439 10.3669 10.1978 10.2948 10.1664C10.2226 10.1351 10.1453 10.1189 10.0673 10.1189H9.64601V9.3122C9.64601 9.14652 9.58338 8.98762 9.4719 8.87047C9.36042 8.75332 9.20922 8.6875 9.05157 8.6875Z"
                fill="#FFFFFE"
              />
            </svg>
          </button>

          {/* Text Paragraph */}
          <p
            className="flex-1 p-2 rounded cursor-pointer max-w-[300px] truncate"
            onClick={handleTextClick}
          >
            This diagram should be of great help to you.
          </p>

          {/* Add-ons Section */}
        <div className="flex items-center justify-center space-x-2">
          <p className="text-sm text-gray-600">Add ons:</p>
          <p
            className="cursor-pointer text-sm text-blue-600 hover:underline"
            onClick={() => handleAddOnClick("..does this help?")}
          >
            ..does this help?
          </p>
          <p
            className="cursor-pointer text-sm text-blue-600 hover:underline"
            onClick={() => handleAddOnClick("..let me know")}
          >
            ..let me know
          </p>
        </div>
        </div>

        

        {/* Inline Buttons - Aligned to the right */}
        <div className="flex gap-2">
          <button>
            <img src={Group4} alt="Emoji Picker" className="w-9 h-9" />
          </button>
          <button>
            <img src={Group5} alt="Emoji Picker" className="w-9 h-9" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection1;