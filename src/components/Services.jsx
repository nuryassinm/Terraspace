import React from 'react';
import { motion } from 'framer-motion';

const SkeletonHighlights = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-urbanist">
      <div className="space-y-12">
        <div className="text-center mb-16">
          <div className="space-y-2">
            <div className="h-8 bg-[#D9D9D9] rounded w-64 mx-auto animate-pulse" />
            <div className="h-8 bg-[#D9D9D9] rounded w-72 mx-auto animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] p-6 rounded-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="w-8 h-8 bg-[#D9D9D9] rounded animate-pulse" />
                <div className="h-6 bg-[#D9D9D9] rounded w-32 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-[#D9D9D9] rounded w-full animate-pulse" />
                  <div className="h-4 bg-[#D9D9D9] rounded w-3/4 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-32 h-10 bg-[#D9D9D9] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonHighlights;