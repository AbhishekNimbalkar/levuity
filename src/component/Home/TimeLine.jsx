// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// import SchoolIcon from "@mui/icons-material/School";
// import StarIcon from "@mui/icons-material/Star";

// const timelineData = [
//   {
//     title: "Collaborate & Conquer",
//     description:
//       "Dive into a community where every student’s voice matters. Learn, grow, and solve problems together with peers who inspire you.",
//     align: "left",
//   },
//   {
//     title: "AI That Knows You",
//     description:
//       "Our AI doesn’t just follow trends – it understands you. It tailors your learning path, giving you exactly what you need, when you need it.",
//     align: "right",
//   },
//   {
//     title: "Data That Drives You",
//     description:
//       "No more guessing where you stand. With real-time analytics, you’ll have a clear roadmap of your progress, helping you hit new heights every day.",
//     align: "left",
//   },
// ];

// const TimeLine = () => {
//   return (
//     <section className="timeline-section">
//       <VerticalTimeline >
//         {timelineData.map((item, index) => (
//         //   <VerticalTimelineElement
//         //     key={index}
//         //     className="vertical-timeline-element--work  items-end"
//         //     // contentStyle={{
//         //     //   background: "rgb(33, 150, 243)",
//         //     //   color: "#fff",
//         //     // }}
//         //     // contentArrowStyle={{
//         //     //   borderRight: "7px solid rgb(33, 150, 243)",
//         //     // }}
//         //     // date={`Step ${index + 1}`}
//         //     iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//         //     // icon={<SchoolIcon />}
//         //     position={item.align} // Dynamically setting alignment
//         //   >
//         //     <h3 className="vertical-timeline-element-title font-inter font-semibold text-[#344054]">{item.title}</h3>
//         //     <p className=" font-inter font-normal text-[#98A2B3]">{item.description}</p>
//         //   </VerticalTimelineElement>
//         <VerticalTimelineElement
//   key={index}
//   className="vertical-timeline-element--work items-end"
//   iconStyle={{
//     background: "rgb(33, 150, 243)", // Inside color
//     color: "#fff", // Icon color
//     border: "3px dashed #1D2939", // Dashed border
//   }}
//   position={item.align}
// >
//   <h3 className="vertical-timeline-element-title font-inter font-semibold text-[#344054]">
//     {item.title}
//   </h3>
//   <p className="font-inter font-normal text-[#98A2B3]">{item.description}</p>
// </VerticalTimelineElement>

//         ))}

//         {/* <VerticalTimelineElement
//           iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//           icon={<StarIcon />}
//         /> */}
//       </VerticalTimeline>
//     </section>
//   );
// };

// export default TimeLine;

//////////////////////////////////////////////




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
                Collaborate & Conquer
              </h2>
              <p data-aos="fade-right"  className="text-lg text-[#98A2B3]">
                Dive into a community where every student’s voice matters.
                Learn, grow, and solve problems together with peers who inspire
                you.
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
              <h2 data-aos="fade-left"  className="text-2xl font-semibold mb-2">
                AI That Knows You{" "}
              </h2>
              <p data-aos="fade-left"  className="text-lg text-[#98A2B3]">
                Our AI doesn’t just follow trends – it understands you. It
                tailors your learning path, giving you exactly what you need,
                when you need it.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full md:w-1/2 md:pr-8 md:text-right text-center mb-4 md:mb-0">
              <h2 data-aos="fade-right"  className="text-2xl font-semibold mb-2">
                Data That Drives You
              </h2>
              <p data-aos="fade-right"  className="text-lg text-[#98A2B3]">
                No more guessing where you stand. With real-time analytics,
                you’ll have a clear roadmap of your progress, helping you hit
                new heights every day.
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




////////////////////////////////////////////
// import React from "react";

// const Timeline = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r flex flex-col justify-center items-center text-[#344054] px-4 py-2">
//       <div className="max-w-4xl w-full relative">
//         {/* Timeline line - Starts from first circle and ends at third circle */}
//         <div className="absolute left-1/2 w-0.5 top-[50px] bottom-[50px] border-l-2 border-dashed border-[#1D2939] transform -translate-x-1/2"></div>

//         <div className="space-y-8 relative">
//           {/* Timeline Item 1 */}
//           <div className="flex items-center w-full">
//             <div className="w-1/2 pr-8 text-right">
//               <h2 className="text-2xl font-semibold mb-2">
//                 Collaborate & Conquer
//               </h2>
//               <p className="text-lg text-[#98A2B3]">
//                 Dive into a community where every student’s voice matters.
//                 Learn, grow, and solve problems together with peers who inspire
//                 you.
//               </p>
//             </div>
//             <div className="w-1/2 pl-8 flex justify-start">
//               <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full left-[-52px]">
//                 <div className="w-8 h-8 bg-[#2756FF] rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Timeline Item 2 */}
//           <div className="flex items-center w-full">
//             <div className="w-1/2 pr-8 flex justify-end">
//               <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full right-[-52px]">
//                 <div className="w-8 h-8 bg-[#1D2939] rounded-full"></div>
//               </div>
//             </div>
//             <div className="w-1/2 pl-8">
//               <h2 className="text-2xl font-semibold mb-2">
//                 AI That Knows You{" "}
//               </h2>
//               <p className="text-lg text-[#98A2B3]">
//                 Our AI doesn’t just follow trends – it understands you. It
//                 tailors your learning path, giving you exactly what you need,
//                 when you need it.
//               </p>
//             </div>
//           </div>

//           {/* Timeline Item 3 */}
//           <div className="flex items-center w-full">
//             <div className="w-1/2 pr-8 text-right">
//               <h2 className="text-2xl font-semibold mb-2">
//                 Data That Drives You
//               </h2>
//               <p className="text-lg text-[#98A2B3]">
//                 No more guessing where you stand. With real-time analytics,
//                 you’ll have a clear roadmap of your progress, helping you hit
//                 new heights every day.
//               </p>
//             </div>
//             <div className="w-1/2 pl-8 flex justify-start">
//               <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full left-[-52px]">
//                 <div className="w-8 h-8 bg-[#2756FF] rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;



























////////////////////////////////////////////

// import React from "react";

// const Timeline = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r flex flex-col justify-center items-center text-[#344054] px-4 py-2">
//       <div className="max-w-4xl w-full">
//         <div className="space-y-8 relative">
//           {/* Timeline line */}
//           {/* <div className="absolute left-1/2 w-1 h-full bg-[#1D2939] bg-opacity-25 transform -translate-x-1/2"></div> */}
//           <div className="absolute left-1/2 w-0.5 h-full border-l-2 border-dashed border-[#1D2939] transform -translate-x-1/2"></div>

//           {/* Timeline Item 1 */}
//           <div className="flex items-center w-full">
//             <div className="w-1/2 pr-8 text-right">
//               <h2 className="text-2xl font-semibold mb-2">
//                 Collaborate & Conquer
//               </h2>
//               <p className="text-lg text-[#98A2B3]">
//                 Dive into a community where every student’s voice matters.
//                 Learn, grow, and solve problems together with peers who inspire
//                 you.{" "}
//               </p>
//             </div>
//             <div className="w-1/2 pl-8 flex justify-start">
//               {/* <div className="w-6 h-6 bg-[#2756FF] rounded-full relative left-[-44px]"></div> */}
//               <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full left-[-52px]">
//                 <div className="w-8 h-8 bg-[#2756FF] rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Timeline Item 2 */}
//           <div className="flex items-center w-full">
//             <div className="w-1/2 pr-8 flex justify-end">
//               {/* <div className="w-6 h-6 bg-[#1D2939] rounded-full relative right-[-44px]"></div> */}
//               <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full right-[-52px]">
//                 <div className="w-8 h-8 bg-[#1D2939] rounded-full"></div>
//               </div>
//             </div>
//             <div className="w-1/2 pl-8">
//               <h2 className="text-2xl font-semibold mb-2">
//                 AI That Knows You{" "}
//               </h2>
//               <p className="text-lg text-[#98A2B3]">
//                 Our AI doesn’t just follow trends – it understands you. It
//                 tailors your learning path, giving you exactly what you need,
//                 when you need it.
//               </p>
//             </div>
//           </div>

//           {/* Timeline Item 3 */}
//           <div className="flex items-center w-full">
//             <div className="w-1/2 pr-8 text-right">
//               <h2 className="text-2xl font-semibold mb-2">
//                 Data That Drives You
//               </h2>
//               <p className="text-lg text-[#98A2B3]">
//                 No more guessing where you stand. With real-time analytics,
//                 you’ll have a clear roadmap of your progress, helping you hit
//                 new heights every day.
//               </p>
//             </div>
//             <div className="w-1/2 pl-8 flex justify-start">
//               {/* <div className="w-6 h-6 bg-[#2756FF] rounded-full relative left-[-44px]"></div> */}
//               <div className="relative flex items-center justify-center w-10 h-10 border-2 border-dashed border-[#1D2939] rounded-full left-[-52px]">
//                 <div className="w-8 h-8 bg-[#2756FF] rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;


//////////////////////////////////////////////


























// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import WorkIcon from "@mui/icons-material/Work";

// import SchoolIcon from "@mui/icons-material/School";
// import StarIcon from "@mui/icons-material/Star";

// const TimeLine = () => {
//   return (
//     <section className="timeline-section">
//       <VerticalTimeline>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//           date="2011 - present"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Creative Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, Project
//             Management, Team Leading
//           </p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2010 - 2011"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Art Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             San Francisco, CA
//           </h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, SEO, Online
//             Marketing
//           </p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2008 - 2010"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             Los Angeles, CA
//           </h4>
//           <p>User Experience, Visual Design</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2006 - 2008"
//           iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//           icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             San Francisco, CA
//           </h4>
//           <p>User Experience, Visual Design</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="April 2013"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Content Marketing for Web, Mobile and Social Media
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//           <p>Strategy, Social Media</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="November 2012"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Agile Development Scrum Master
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//           <p>Creative Direction, User Experience, Visual Design</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="2002 - 2006"
//           iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
//           icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">
//             Bachelor of Science in Interactive Digital Media Visual Imaging
//           </h3>
//           <h4 className="vertical-timeline-element-subtitle">
//             Bachelor Degree
//           </h4>
//           <p>Creative Direction, Visual Design</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
//           icon={<StarIcon />}
//         />
//       </VerticalTimeline>
//     </section>
//   );
// };

// export default TimeLine;

// import React from "react";

// const Timeline = () => {
//   const timelineData = [
//     {
//       title: "Collaborate & Conquer",
//       description:
//         "Dive into a community where every student’s voice matters. Learn, grow, and solve problems together with peers who inspire you.",
//       align: "left",
//     },
//     {
//       title: "AI That Knows You",
//       description:
//         "Our AI doesn’t just follow trends – it understands you. It tailors your learning path, giving you exactly what you need, when you need it.",
//       align: "right",
//     },
//     {
//       title: "Data That Drives You",
//       description:
//         "No more guessing where you stand. With real-time analytics, you’ll have a clear roadmap of your progress, helping you hit new heights every day.",
//       align: "left",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center p-10">
//       <div className="relative w-full max-w-3xl">
//         {/* Timeline Vertical Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 border-l-2 border-dashed"></div>

//         {/* Timeline Items */}
//         {timelineData.map((item, index) => (
//           <div key={index} className="relative flex items-center mb-10">
//             {/* Left Content */}
//             {item.align === "left" && (
//               <div className="w-1/2 pr-6 text-right">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             )}

//             {/* Circle */}
//             <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
//               <div className="w-5 h-5 bg-black rounded-full"></div>
//             </div>

//             {/* Right Content */}
//             {item.align === "right" && (
//               <div className="w-1/2 pl-6 text-left">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;
