import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-[#4887AA] to-[#9AB9CD] overflow-hidden rounded-[40px] md:mx-16 mx-4  my-8">
      <div className="max-w-[110rem] mx-auto px-2 md:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='md:p-20 p-5 '
          >
            <motion.h1 
              className="text-4xl lg:text-[5rem] flex flex-col gap-10 font-bold text-[#fff] font-urbanist mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Designing Your <span>Next Chapter.</span>
            </motion.h1>
            <motion.p 
              className="text-[#fff] text-lg py-4  mb-8 font-urbanist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Where Dreams Become Apartments: Transforming Visions into<br />
              Vibrant Living Spaces.
            </motion.p>
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="bg-[#fff] text-black px-6 py-3 rounded-full font-urbanist">
                Explore Projects
              </button>
              <button className="flex items-center text-[#fff] font-urbanist">
                <Play className="w-10 h-10 p-3 backdrop-blur-md bg-white/20 text-white rounded-full shadow-lg mr-2" />
                Our Process
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Skeleton Loading */}
            {!imageLoaded && (
              <div className="bg-gray-200 animate-pulse rounded-3xl aspect-[4/3]" />
            )}
            
            <img
              src="../assets/land.png" // Replace with your actual image
              alt="Modern apartment building"
              className={`w-full rounded-3xl ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Client Reviews */}
            <motion.div 
              className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 flex items-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-2 mr-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <div className="font-urbanist">
                <div className="font-semibold">50k+ Happy Clients</div>
                <div className="text-yellow-400">★★★★★ 4.5/5</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;