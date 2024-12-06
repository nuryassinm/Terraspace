// components/StatisticsBar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const StatisticsBar = () => {
  const stats = [
    { number: "1000+", label: "Happy Members" },
    { number: "50+", label: "Weekly Classes" },
    { number: "15", label: "Certified Trainers" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mx-auto bg-[#2b2b2b] rounded-full py-12 px-10 mt-20"
    >
      <div className="flex justify-between items-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-white text-4xl font-bold">{stat.number}</h3>
            <p className="text-gray-300 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatisticsBar;
