import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MoveUpRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer for real estate clients?",
      answer: "We provide comprehensive services, including market analysis, property valuation, tailored marketing strategies, and legal documentation assistance to ensure a smooth buying or selling process."
    },
    {
      question: "How can I get started with your services?",
      answer: "Contact our team for an initial consultation. We'll discuss your needs and create a customized plan to help you achieve your real estate goals."
    },
    {
      question: "How do you assist with legal documentation?",
      answer: "Our team provides comprehensive support with all necessary legal paperwork, ensuring compliance and smooth transactions throughout the process."
    },
    {
      question: "Can you help me find the right property?",
      answer: "Yes, we utilize our extensive network and market knowledge to find properties that match your specific requirements and preferences."
    }
  ];

  return (
    <div className="max-w-[110rem] mx-auto px-4 py-16 font-urbanist">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-3xl overflow-hidden mb-24"
      >
        <div className="aspect-[16/7] w-full bg-[#D9D9D9] relative">
          {/* Replace with actual image */}
          <img src='../assets/silver-sport-car-with-driver-highway.jpg' className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-16 right-12 transform -translate-y-1/2 max-w-lg bg-white p-8 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-[#0B1D27] mb-4">
            What Makes Us Your Ideal Real Estate Partner?
          </h2>
          <p className="text-[#656E73] mb-6">
            Our knowledgeable team provides trusted expertise for informed real estate decisions, offering tailored support to meet your unique needs and demonstrating proven success through a strong track record of client satisfaction.
          </p>
          <button className="flex items-center gap-2 bg-[#0B1D27] text-white px-6 py-3 rounded-full hover:bg-[#0B1D27]/90 transition-colors duration-300">
            Contact Us
            <MoveUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl text-[3rem] flex flex-col gap-6 font-bold text-center text-[#0B1D27] mb-12">
          Frequently Asked
          <span>Questions</span>
          
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              className="border-b bg-[#FAFAFA] p-4 rounded-xl border-[#D9D9D9]"
            >
              <button
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className=" font-bold text-xl text-[#0B1D27]">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-5 h-5 text-xl font-bold text-[#0B1D27]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[#656E73] text-lg">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;