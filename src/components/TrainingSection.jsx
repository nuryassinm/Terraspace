// components/TrainingSection.jsx
import React from 'react';

function TrainingSection() {
  const trainings = [
    {
      title: "PERSONAL TRAINING",
      image: "../assets/fitness1.jpg",
    },
    {
      title: "GROUP FITNESS CLASSES",
      image: "../assets/fitness2.jpg",
    },
    {
      title: "FUNCTIONAL TRAINING",
      image: "../assets/fitness3.jpg",
    }
  ];

  return (
    <div className=" p-6 md:p-8 w-full flex flex-col ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold tracking-wide">TRAININGS</h2>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-xs">
          MENU
        </button>
      </div>

      {/* Training Cards */}
      <div className='flex justify-center w-full'>
      <div className="space-y-4 w-[80%]  flex justify-center flex-col">
        {trainings.map((training, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-3xl h-[180px] group cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={training.image}
                alt={training.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full px-6 flex items-center justify-between">
              <h3 className="text-white text-2xl font-bold">{training.title}</h3>
              <div className="text-white">
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform"
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
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default TrainingSection;

