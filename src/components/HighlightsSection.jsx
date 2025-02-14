import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Home, Scale, UserCheck, MessageSquare, Megaphone } from 'lucide-react';
import { GoArrowUpRight } from "react-icons/go";
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

const HighlightsSection = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-[#0B1D27]" />,
      title: "Market Analysis",
      description: "In-depth understanding of market trends to guide pricing and strategy."
    },
    {
      icon: <Home className="w-8 h-8 text-[#0B1D27]" />,
      title: "Property Valuation",
      description: "Accurate assessments to determine the true value of your favourite apartment, cottage etc."
    },
    {
      icon: <Scale className="w-8 h-8 text-[#0B1D27]" />,
      title: "Legal Assistance",
      description: "Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#0B1D27]" />,
      title: "Post-Sale Support",
      description: "Providing assistance even after the sale, ensuring clients feel supported throughout their journey."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#0B1D27]" />,
      title: "Negotiation Skills",
      description: "In-depth understanding of market trends to guide pricing and strategy."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-[#0B1D27]" />,
      title: "Tailored Marketing Plans",
      description: "Developing customized strategies to showcase properties and attract buyers."
    }
  ];

  return (
    <div className="max-w-[110rem] mx-auto px-4  font-urbanist">

      <motion.div 
        initial="hidden"
        animate="show"
        variants={container}
        className="space-y-12"
      >

        <div className="text-center mb-16">
          <div className='flex justify-center py-16'>
          <button className='border border-black rounded-full flex gap-2  px-4 py-2 justify-center'>View More  <GoArrowUpRight className='text-black text-xl'/></button>
          
          </div>
          <motion.div variants={item}>
            <h2 className="text-4xl font-bold text-[#0B1D27] mb-2">
              Highlights of Our
            </h2>
            <h2 className="text-4xl font-bold text-[#0B1D27]">
              Real-Estate Expertise
            </h2>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-[#FAFAFA] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col gap-4">
                {service.icon}
                <h3 className="text-xl font-bold text-[#0B1D27]">{service.title}</h3>
                <p className="text-[#656E73]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={item}
          className="flex justify-center"
        >
          <button className="flex items-center gap-2 border border-[#0B1D27] rounded-full px-6 py-2 text-[#0B1D27] hover:bg-[#0B1D27] hover:text-white transition-colors duration-300">
            View More
            <span className="transform rotate-45">↗</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HighlightsSection;