import React from 'react';
import heroImage from '../../assets/heroImage.png';

const HeroSection = () => {
  return (
    <div className='px-16 flex h-[70vh] mt-20 items-center'>
      {/* Left Section - Heading and Button */}
      <div className='w-1/2 flex flex-col space-y-6'>
        <h1 className='font-poppins font-bold text-4xl lg:text-6xl text-[#0062FF] leading-tight'>
          The Future of Learning<br />
          and Collaboration is<br />
          Just Around the<br />
          Corner.
        </h1>
        <div className='flex flex-col space-y-4'>
          <p className='font-inter font-bold text-xl'>About Levuity</p>
          <button className='px-6 py-3 text-base font-medium font-inter bg-[#2756FF] text-white rounded-lg w-fit'>
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className='w-1/2 flex justify-center'>
        <img 
          src={heroImage} 
          alt='Collaboration illustration' 
          className='w-full max-w-2xl object-contain'
        />
      </div>
    </div>
  );
};

export default HeroSection;
