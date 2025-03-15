import React from "react";
import TimeLine from "./TimeLine";

const AboutSection = () => {
  return (
    <div className="px-16 flex flex-col min-h-[70vh] mt-24 text-center space-y-4">
      <div className="text-center">
        <h1 className="font-inter font-semibold text-2xl text-[#432125] relative inline-block after:content-[''] after:block after:w-8 after:mt-[-3px] after:rounded-xl after:h-[2px] after:bg-[#2756FF]  after:left-2">
          About Us
        </h1>
      </div>
      <p className="font-poppins font-normal text-[#707070] px-[22%]">
        At <span className="font-poppins text-[#494949] italic font-semibold"> Levuity</span>, we’re not just teaching – we’re revolutionizing the way you
        learn. Imagine a world where education isn’t a solo journey but a
        dynamic, collaborative adventure that constantly adapts to YOU.
      </p>
      <TimeLine/>
    </div>
  );
};

export default AboutSection;