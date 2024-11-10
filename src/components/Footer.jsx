// components/TempleSection.jsx
import React from 'react';

function TempleSection() {
  const features = [
    "LEAVE ANY KEY YOU WANT",
    "GREAT PLACE TO WORK OUT",
    "TIME IS ALL YOU NEED",
    "THIS IS THE PLACE FOR YOU"
  ];

  return (
    <div className=" bg-black text-white p-6 md:p-8 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Star Icon */}
        <div className="flex justify-center mb-8">
          <svg 
            className="w-8 h-8" 
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

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            YOUR BODY IS<br />
            YOUR TEMPLE
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm">
            Whether you're a seasoned athlete or just starting out, we have a 
            variety of equipment and classes to suit your needs. Our team of 
            expert trainers is committed to helping you succeed and provide 
            a comfortable workout experience.
          </p>

          <button className="px-8 py-3 border border-white rounded-full 
                           text-sm hover:bg-white hover:text-black 
                           transition-colors duration-300">
            JOIN TODAY
          </button>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-800 pt-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-4"
            >
              <p className="text-sm font-medium text-gray-400">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TempleSection;


