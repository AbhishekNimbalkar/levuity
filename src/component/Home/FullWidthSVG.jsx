const FullScreenSVG = () => {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <svg 
          viewBox="0 0 100 100"  // Adjusted for better scaling
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none" // Forces it to fill the entire screen
        >
          <path d="M 10 50 Q 50 0 90 50" stroke="black" fill="transparent" />
        </svg>
      </div>
    );
  };
  
  export default FullScreenSVG;
  