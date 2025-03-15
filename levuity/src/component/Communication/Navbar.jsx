// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { RiSearch2Line } from "react-icons/ri";
// import BasicMenu from "./Navbar/BasicMenu";
// import BasicMenu2 from "./Navbar/BasicMenu2.jsx";
// import UserComponent from "./Navbar/UserComponent.jsx";

// const Navbar = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         px: 4,
//         py: 1,
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* Left Section - 20% (CLASS & SUBJECT Dropdowns) */}
//       <Box sx={{ display: "flex", flex: "1", gap: 4 }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{
//               color: "#020202",
//               fontFamily: "Poppins",
//               fontSize: "14px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "normal",
//               letterSpacing: "2.1px",
//               textTransform: "uppercase",
//             }}
//           >
//             CLASS
//           </Typography>
//           <BasicMenu />
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{
//               color: "#020202",
//               fontFamily: "Poppins",
//               fontSize: "14px",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight: "normal",
//               letterSpacing: "2.1px",
//               textTransform: "uppercase",
//             }}
//           >
//             SUBJECT
//           </Typography>
//           <BasicMenu2 />
//         </Box>
//       </Box>

//       {/* Middle Section - 60% (Icons Section with Labels) */}
//       <Box
//         sx={{ display: "flex", flex: "3", justifyContent: "center", gap: 4 }}
//       >
//         {/* Home Icon */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
//               fill="#0062FF"
//             />
//           </svg>
//           <Typography variant="caption">Home</Typography>
//         </Box>

//         {/* Revision Icon */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="25"
//             height="24"
//             viewBox="0 0 25 24"
//             fill="none"
//           >
//             <path
//               d="M9 10.5H16"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-miterlimit="10"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M7.5 18.4297H11.5L15.95 21.3897C16.61 21.8297 17.5 21.3597 17.5 20.5597V18.4297C20.5 18.4297 22.5 16.4297 22.5 13.4297V7.42969C22.5 4.42969 20.5 2.42969 17.5 2.42969H7.5C4.5 2.42969 2.5 4.42969 2.5 7.42969V13.4297C2.5 16.4297 4.5 18.4297 7.5 18.4297Z"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-miterlimit="10"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <Typography variant="caption">Revision</Typography>
//         </Box>

//         {/* Discussion Icon */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M16.9704 14.4402C18.3404 14.6702 19.8504 14.4302 20.9104 13.7202C22.3204 12.7802 22.3204 11.2402 20.9104 10.3002C19.8404 9.59016 18.3104 9.35016 16.9404 9.59016"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M7.00043 14.4402C5.63043 14.6702 4.12043 14.4302 3.06043 13.7202C1.65043 12.7802 1.65043 11.2402 3.06043 10.3002C4.13043 9.59016 5.66043 9.35016 7.03043 9.59016"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M12.0001 14.6307C11.9401 14.6207 11.8701 14.6207 11.8101 14.6307C10.4301 14.5807 9.33008 13.4507 9.33008 12.0507C9.33008 10.6207 10.4801 9.4707 11.9101 9.4707C13.3401 9.4707 14.4901 10.6307 14.4901 12.0507C14.4801 13.4507 13.3801 14.5907 12.0001 14.6307Z"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M9.08973 17.7813C7.67973 18.7213 7.67973 20.2613 9.08973 21.2013C10.6897 22.2713 13.3097 22.2713 14.9097 21.2013C16.3197 20.2613 16.3197 18.7213 14.9097 17.7813C13.3197 16.7213 10.6897 16.7213 9.08973 17.7813Z"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <Typography variant="caption">Discussion</Typography>
//         </Box>

//         {/* Resource Library Icon */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M7 10.74V13.94M12 9V15.68M17 10.74V13.94M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
//               stroke="black"
//               stroke-width="1.5"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//           <Typography variant="caption">Resource Library</Typography>
//         </Box>
//       </Box>

//       {/* Right Section - 20% (Search Icon & User Component) */}
//       <Box
//         sx={{
//           display: "flex",
//           flex: "1",
//           justifyContent: "flex-end",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         <RiSearch2Line size={24} />
//         <UserComponent />
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;

import React from "react";
import { Box } from "@mui/material";
import { RiSearch2Line } from "react-icons/ri";
import Dropdown from "./Dropdown";
import NavItem from "./NavItem";
import UserComponent from "./Navbar/UserComponent";

// SVG Icons
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
      fill="#0062FF"
    />
  </svg>
);

const RevisionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M9 10.5H16"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7.5 18.4297H11.5L15.95 21.3897C16.61 21.8297 17.5 21.3597 17.5 20.5597V18.4297C20.5 18.4297 22.5 16.4297 22.5 13.4297V7.42969C22.5 4.42969 20.5 2.42969 17.5 2.42969H7.5C4.5 2.42969 2.5 4.42969 2.5 7.42969V13.4297C2.5 16.4297 4.5 18.4297 7.5 18.4297Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const DiscussionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.9704 14.4402C18.3404 14.6702 19.8504 14.4302 20.9104 13.7202C22.3204 12.7802 22.3204 11.2402 20.9104 10.3002C19.8404 9.59016 18.3104 9.35016 16.9404 9.59016"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.00043 14.4402C5.63043 14.6702 4.12043 14.4302 3.06043 13.7202C1.65043 12.7802 1.65043 11.2402 3.06043 10.3002C4.13043 9.59016 5.66043 9.35016 7.03043 9.59016"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.0001 14.6307C11.9401 14.6207 11.8701 14.6207 11.8101 14.6307C10.4301 14.5807 9.33008 13.4507 9.33008 12.0507C9.33008 10.6207 10.4801 9.4707 11.9101 9.4707C13.3401 9.4707 14.4901 10.6307 14.4901 12.0507C14.4801 13.4507 13.3801 14.5907 12.0001 14.6307Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.08973 17.7813C7.67973 18.7213 7.67973 20.2613 9.08973 21.2013C10.6897 22.2713 13.3097 22.2713 14.9097 21.2013C16.3197 20.2613 16.3197 18.7213 14.9097 17.7813C13.3197 16.7213 10.6897 16.7213 9.08973 17.7813Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ResourceLibraryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 10.74V13.94M12 9V15.68M17 10.74V13.94M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [selectedClass, setSelectedClass] = React.useState("CA-I");
  const [selectedSubject, setSelectedSubject] = React.useState("Math");

  const classOptions = ["CA-I", "IIT JEE", "NEET"];
  const subjectOptions = ["Math", "Physics", "Chemistry"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        py: 1,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Left Section - Dropdowns */}
      <Box sx={{ display: "flex", flex: "1", gap: 4 }}>
        <Dropdown
          label="CLASS"
          options={classOptions}
          selectedItem={selectedClass}
          onSelect={setSelectedClass}
        />
        <Dropdown
          label="SUBJECT"
          options={subjectOptions}
          selectedItem={selectedSubject}
          onSelect={setSelectedSubject}
        />
      </Box>

      {/* Middle Section - Navigation Icons */}
      <Box
        sx={{ display: "flex", flex: "3", justifyContent: "center", gap: 4 }}
      >
        <NavItem icon={<HomeIcon />} label="Home" />
        <NavItem icon={<RevisionIcon />} label="Revision" />
        <NavItem icon={<DiscussionIcon />} label="Discussion" />
        <NavItem icon={<ResourceLibraryIcon />} label="Resource Library" />
      </Box>

      {/* Right Section - Search & User */}
      <Box
        sx={{
          display: "flex",
          flex: "1",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        <RiSearch2Line size={24} />
        <UserComponent />
      </Box>
    </Box>
  );
};

export default Navbar;
