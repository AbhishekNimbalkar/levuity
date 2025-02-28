
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust animation duration
      once: true, // Animation occurs once while scrolling down
    });
  }, []);
  return (
    <div className="min-h-[50vh] bg-gradient-to-r flex flex-col justify-start items-center text-[#344054] px-4 py-8">
      <div className="max-w-4xl w-full relative">
        {/* Timeline line - Starts from first circle and ends at third circle */}
        <div className="absolute left-1/2 w-0.5 top-[50px] bottom-[50px] border-l-2 border-dashed border-[#1D2939] transform -translate-x-1/2 md:block hidden"></div>

        <div className="space-y-8 relative">
          {/* Timeline Item 1 */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-8 md:text-right text-center mb-4 md:mb-0">
              <h2 data-aos="fade-right" className="text-2xl font-semibold mb-2">
                AI-Powered Learning & Real-World Projects
              </h2>
              <p data-aos="fade-right" className="text-lg text-[#98A2B3]">
                Experience personalized, AI-driven lessons that adapt to you,
                while working on hands-on projects that prepare you for the
                future.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 flex justify-center md:justify-start">
              <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full md:left-[-52px]">
                <div className="w-8 h-8 bg-[#2756FF] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-8 flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full md:right-[-52px]">
                <div className="w-8 h-8 bg-[#1D2939] rounded-full"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mb-4 md:mb-0 order-1 md:order-2">
              <h2 data-aos="fade-left" className="text-2xl font-semibold mb-2">
                Expert Mentorship & Analytics{" "}
              </h2>
              <p data-aos="fade-left" className="text-lg text-[#98A2B3]">
                Gain valuable insights from industry professionals and track
                your progress with real-time analytics to ensure you’re always
                moving forward.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-8 md:text-right text-center mb-4 md:mb-0">
              <h2 data-aos="fade-right" className="text-2xl font-semibold mb-2">
                Collaborative Growth & Continuous Support
              </h2>
              <p data-aos="fade-right" className="text-lg text-[#98A2B3]">
                Join a vibrant community, collaborate on meaningful projects,
                and constantly upgrade your skills with the tools and resources
                designed to accelerate your career.
              </p>
            </div>
            <div className="w-full md:w-1/2 md:pl-8 flex justify-center md:justify-start">
              <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full md:left-[-52px]">
                <div className="w-8 h-8 bg-[#2756FF] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
