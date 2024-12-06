// components/TrainersSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatisticsBar from './StatisticsBar';
const trainers = [
  {
    id: 1,
    name: "DANIEL JOSS JUNIOR",
    role: "BODYBUILDING COACHES",
    image: "../assets/woman-bicycle.jpg"
  },
  {
    id: 2,
    name: "MADISON WHITE",
    role: "FITNESS COACHES",
    image: "../assets/posing-athletes-holding-weights.jpg"
  },
  // Add more trainers as needed
];

const TrainersSection = () => {
  const [activeTrainer, setActiveTrainer] = useState(0);

  return (
    <div className="w-full   px-4">
      <StatisticsBar />
      
      <div className="max-w-[90rem] mx-auto mt-32">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute -left-20 text-[120px] font-bold text-white -z-10"
          >
            STAFF
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white">Meet Our Expert</h2>
            <span className="text-4xl font-bold text-orange-500">Trainers</span>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 grid-cols-1 gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                className="relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-gray-400 text-sm">{trainer.role}</p>
                  <h3 className="text-white text-xl font-bold">{trainer.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {trainers.map((_, index) => (
              <button
                key={index}
                className={`w-8 h-2 rounded-full ${
                  activeTrainer === index ? 'bg-green-500' : 'bg-gray-600'
                }`}
                onClick={() => setActiveTrainer(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainersSection;