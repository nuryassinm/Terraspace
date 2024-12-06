// components/ProgramsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "Personal Training",
    image: "../assets/fitness2.jpg",
    size: "small",
    hasArrow: true
  },
  {
    id: 2,
    title: "Group Training",
    image: "../assets/young-women-taking-part-spinning-class.jpg",
    size: "medium",
    hasArrow: false
  },
  {
    id: 3,
    title: "CrossFit Classes",
    image: "../assets/side-view-woman-training.jpg",
    size: "medium",
    hasArrow: false
  },
  {
    id: 4,
    title: "Strength Training",
    image: "../assets/tired-woman-raises-two-dumbbells-works-biceps-determined-unshaven-man-carries-karemat-gymnastic-training.jpg",
    size: "small",
    hasArrow: false
  },
  {
    id: 5,
    title: "Battle Ropes",
    image: "../assets/man-women-doing-crunches.jpg",
    size: "medium",
    hasArrow: false
  },
  {
    id: 6,
    title: "Online Training",
    image: "../assets/fitness1.jpg",
    size: "small",
    isOnline: true,
    price: "₹200/Month",
    hasArrow: true
  }
];

const ProgramsGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 py-20 md:grid-cols-3 gap-4 p-4 w-[105rem]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {programs.map((program) => (
        <motion.div
          key={program.id}
          variants={itemVariants}
          className={`relative rounded-3xl overflow-hidden cursor-pointer group
            ${program.size === 'medium' ? 'col-span-2' : 'col-span-1'}
            ${program.isOnline ? 'bg-gray-800' : ''}
          `}
        >
          {program.isOnline ? (
            <div className="p-8 bg-[#333333] h-full flex flex-col justify-between">
              <h3 className="text-white text-2xl font-bold">ONLINE</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-400">From {program.price}</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-700 p-2 rounded-full"
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          ) : (
            <>
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {program.hasArrow && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full"
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProgramsGrid;