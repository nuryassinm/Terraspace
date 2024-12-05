import React from 'react';
import { motion } from 'framer-motion';

const DiscountBanner = () => {
  return (
    <section className="bg-[#1a1a1a] w-full py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-2">60% Discount Offer</h2>
        <p className="text-gray-400 text-center mb-12">
          Seize the moment! Get a fabulous 60% discount and treat yourself to the best deals in town.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800 rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src="../assets/side-view-woman-training.jpg"
              alt="Woman exercising on beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-emerald-500 to-transparent"/>
          </div>

          <div className="p-8 flex flex-col justify-center items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="bg-emerald-500 rounded-full p-4 mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">This Summer Save</h3>
                <p className="text-5xl font-bold text-emerald-500 mb-4">60%</p>
                <p className="text-gray-400 mb-6">Off Here</p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg transition-colors">
                  ENROLL NOW
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DiscountBanner;