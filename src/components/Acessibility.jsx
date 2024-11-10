// components/HeroSection.jsx
import React from 'react';

function Acessibility() {
  return (
    <div className="flex items-center justify-center px-4 py-12 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Star Icon */}
        <div className="mb-8">
          <svg 
            className="w-8 h-8 mx-auto" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          FITNESS SHOULD BE<br />
          ACCESSIBLE TO EVERYONE.
        </h1>

        {/* Description Text */}
        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Whether you're a seasoned athlete or just starting out, we have a 
          variety of equipment and classes to suit your needs. Our team 
          of expert trainers is committed to helping you succeed and 
          provide a comfortable workout experience.
        </p>

        {/* CTA Button */}
        <button className="px-8 py-3 border-2 border-black rounded-full 
                         text-sm font-medium hover:bg-black hover:text-white 
                         transition-colors duration-300">
          JOIN TODAY
        </button>
      </div>
    </div>
  );
}

export default Acessibility;