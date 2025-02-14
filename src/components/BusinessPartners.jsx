import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Stats = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const stats = [
    { number: "100k+", label: "Property Constructed" },
    { number: "100+", label: "Award Winning" },
    { number: "50K+", label: "Satisfied Clients" },
    { number: "5+", label: "Years of Experience" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section with Image and Text */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative flex flex-col md:flex-row gap-6 bg-[#FAFAFA] p-3 rounded-2xl"
        >
          {/* Skeleton Loading */}
          {!imageLoaded && (
            <div className="bg-gray-200 animate-pulse rounded-3xl aspect-square" />
          )}
          
          <img
            src="../assets/pexels-luis-yanez-57302-206172.jpg" // Replace with your actual image
            alt="Modern building exterior"
            className={`w-96 rounded-3xl ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-[#0B1D27] font-urbanist mb-4">
              Find Your Dream Property<br />
              At The Best Price
            </h2>
            <p className="text-[#656E73] mb-6 font-urbanist">
              We support our clients at every stage of<br />
              the buying and selling process, ensuring<br />
              a seamless and stress-free experience<br />
              from start to finish.
            </p>
            <button className="inline-flex items-center font-urbanist text-[#0B1D27] border border-[#0B1D27] rounded-full px-6 py-2 hover:bg-[#0B1D27] hover:text-white transition-colors">
              Learn More
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Section with Stats */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#FAFAFA] p-8 rounded-3xl shadow-sm"
            >
              <h3 className="text-6xl font-bold text-[#0B1D27] font-urbanist mb-2">
                {stat.number}
              </h3>
              <p className="text-[#656E73] font-urbanist">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Logo Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="flex justify-center">
            <img src='../assets/Huffpost.svg' className="h-16 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;