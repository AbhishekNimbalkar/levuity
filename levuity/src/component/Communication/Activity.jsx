import React from "react";
import actimg1 from "../../assets/actimg1.png";
import actimg2 from "../../assets/actimg2.png";

const Activity = () => {
  return (
    <div className="space-y-1">
      {/* Header Section */}
      <div className="flex items-center justify-between px-5 py-6 border-b border-black/10">
        <h1 className="text-xl font-semibold">Activity</h1>
        <span className="bg-[#EDF2F7] text-black text-xs font-bold px-2 py-1 rounded-full">
          12
        </span>
      </div>

      {/* Card 1 */}
      <div
        className="flex flex-col h-[260px] border-b border-[#B9BBBE] items-start flex-shrink-0 self-stretchw-full gap-4 bg-no-repeat bg-right-bottom bg-[length:220px_220px]"
        style={{ backgroundImage: `url(${actimg1})` }}
      >
        <div className="space-y-1 max-w-[80%] px-4 ">
          <p className="inline-flex items-center gap-2 py-1 rounded-[12px]  text-black text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#62A978]"></span>
            Sessions
          </p>

          <p className="text-[16px] font-semibold leading-[24px] text-black/40 font-['Inter']">
            Your Sessions will appear here
          </p>

          <p className="text-[12px] font-normal leading-[18px] text-black/40 font-['Inter']">
            Your dashboard’s looking a little empty—let’s add some sessions to
            get started!
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex flex-col h-[260px] items-start flex-shrink-0 self-stretch rounded-lg w-full gap-4 bg-no-repeat bg-right-bottom bg-[length:164px_149px]"
        style={{ backgroundImage: `url(${actimg2})` }}
      >
        <div className="space-y-1 max-w-[80%] px-4 pt-4">
          <p className="inline-flex items-center gap-2 py-1 rounded-[12px]  text-black text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#209BDD]"></span>
            Notifications
          </p>
          <p className="text-[16px] font-semibold leading-[24px] text-black/40 font-['Inter']">
            Your Conversations will appear here{" "}
          </p>

          <p className="text-[12px] font-normal leading-[18px] text-black/40 font-['Inter']">
            No notifications yet! Ask your first doubt or join a conversation to
            start filling this space with updates and replies!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
