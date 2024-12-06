// components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="  h-[calc(100vh-80px)] overflow-hidden"
    >
      <div className=" ">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0"
        >
          <img 
            src="../assets/landing1.jpg"
            alt="Fitness Model Left"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="relative top-32  transform flex items-center  text-end z-10"
        >
          <h1 className="text-white w-full text-[3rem] md:text-[9rem] font-bold tracking-wider">
            TIME TO
            <br />
            GET FIT
          </h1>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className=""
        >
          {/* <img 
            src="../assets/landing1.jpg"
            alt="Fitness Model Right"
            className="w-full h-[70vh] object-cover"
          /> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;