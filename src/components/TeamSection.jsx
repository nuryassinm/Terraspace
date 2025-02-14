import React from 'react';
import { motion } from 'framer-motion';

const SkeletonDiscoverSpaces = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-urbanist">
      <div className="mb-12">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-8 bg-[#D9D9D9] rounded w-64 animate-pulse" />
            <div className="h-8 bg-[#D9D9D9] rounded w-48 animate-pulse" />
          </div>
          <div className="w-32 h-10 bg-[#D9D9D9] rounded-full animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden ${
              index < 2 ? 'col-span-2' : index === 3 ? 'col-span-2' : 'col-span-1'
            }`}
          >
            <div className="aspect-[4/3] w-full bg-[#D9D9D9] animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonDiscoverSpaces;