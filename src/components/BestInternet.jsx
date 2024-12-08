// App.jsx
import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="max-w-[100rem] w-full mx-auto p-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div variants={item}>
          <img 
            src="../assets/pexels-foadshariyati-29667296.jpg" 
            alt="Fitness" 
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </motion.div>
        
        <motion.div variants={item} className="space-y-8">
          <h1 className="text-3xl font-bold">The best internet <br /> optimization for you</h1>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-red-500 text-xl font-bold mb-2">01</h3>
              <h4 className="font-bold mb-1 text-2xl">We have expertise in SEO</h4>
              <p className="text-gray-400 text-md">Elevate your nutrition and lifestyle choices in our comprehensive hub dedicated <br /> to  holistic health studios</p>
            </div>
            
            <div>
              <h3 className="text-red-500 text-xl font-bold mb-2">02</h3>
              <h4 className="font-bold mb-1 text-2xl">We have expertise in Social Media Marketing</h4>
              <p className="text-gray-400 text-md">Grow with our diverse array of group fitness experiences w ithin our spacious <br />studios studios studios</p>
            </div>
            
            <div>
              <h3 className="text-red-500 text-xl font-bold mb-2">03</h3>
              <h4 className="font-bold mb-1 text-2xl">We have expertise in Email Marketing</h4>
              <p className="text-gray-400 text-md">Immerse yourself in our holistic wellness oasis, featuring ame nities aimed at nurturing <br /> your body studios</p>
            </div>
          </div>
        </motion.div>
      </div>

      

    
    </motion.div>
  );
};

export default App;