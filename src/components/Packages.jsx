// components/Packages.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Basic Packages",
      price: 60,
      features: [
        "4 Days Per Week",
        "Functional Training",
        "Weight lift training",
        "Basic Introduction",
        "Small tasks"
      ]
    },
    {
      name: "Adavance Packages",
      price: 80,
      features: [
        "4 Days Per Week",
        "Functional Training",
        "Focus On Relaxation",
        "Group training",
        "Videos learning"
      ]
    },
    {
      name: "Premium Packages",
      price: 120,
      features: [
        "4 Days Per Week",
        "Functional Training",
        "Personal Training",
        "Group training",
        "Videos learning"
      ]
    }
  ];

  return (
    <section className="bg-[#1a1a1a] w-full py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Select Our Packages</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose excellence: Our packages offer a blend of value, performance, and customization for your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-colors"
            >
              <h3 className="text-white text-xl font-semibold mb-6">{pkg.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-white">${pkg.price}</span>
                <span className="text-gray-400 ml-2">/ Month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center justify-between w-full text-white border border-gray-700 rounded-lg px-6 py-3 hover:bg-gray-800 transition-colors">
                Purchase Now
                <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Packages;