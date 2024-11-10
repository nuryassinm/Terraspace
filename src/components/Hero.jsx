// components/HeroSection.jsx
import React from 'react';

function HeroSection() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
      <div className='flex flex-col text-center'>
        <div className="text-sm text-gray-600 mb-4">
          ACHIEVE YOUR FITNESS GOALS
        </div>

        {/* Main Heading */}
        <h1 className="xl:text-7xl md:text-3xl font-bold mb-8">
          FIND YOUR<br />STRENGTH
        </h1>
      </div>
        {/* Image Card Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="aspect-[16/9] relative">
            <img 
              src="../assets/landing.jpg" 
              alt="Fitness" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            
            {/* Overlay Text */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <h2 className="text-6xl font-bold text-white mb-6">
                INSIDE<br />AND OUT.
              </h2>
              <p className="text-white/80 max-w-md">
                We are dedicated to helping you achieve your fitness 
                goals and improve your overall health and well-being.
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 right-8 flex items-center space-x-2">
              <span className="text-white/80 text-sm">2/10</span>
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
