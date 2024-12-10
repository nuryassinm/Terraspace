// App.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'STARTED',
    price: '39',
    features: [
      'Creative Design',
      '03 Mockup Month',
      'Creation List',
      'Logo Design',
      'Interactive Tests'
    ]
  },
  {
    name: 'INTERMEDIATE',
    price: '59',
    features: [
      'Creative Design',
      '03 Mockup Month',
      'Creation List',
      'Logo Design',
      'Interactive Tests'
    ]
  },
  {
    name: 'PROFESSIONAL',
    price: '99',
    features: [
      'Creative Design',
      '03 Mockup Month',
      'Creation List',
      'Logo Design',
      'Interactive Tests'
    ]
  }
];

const PricingSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[112rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="flex flex-col w-full  items-center gap-8 mb-16">
          {!imageLoaded ? (
            <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg" />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-[500px]"
            >
              <div className="relative  h-[500px] overflow-hidden">
                <img
                  src="../assets/pexels-canvastudio-3194518.jpg"
                  alt="Meeting"
                  className="rounded-lg  w-full "
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 p-3 rounded-full text-white bg-orange-600" />
                </div>
              </div>
            </motion.div>
          )}
          <div className="w-full md:flex-row flex-col justify-between">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[3rem] font-medium mb-4"
            >
              OUR FLEXIBLE PRICING <br /> PLANS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-500 text-lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor br modi id <br />
               alias temporibus repudiandae sapiente, laborum neque sit obcaecati esse nostrum <br />
                consequatur in rerum omnis tempora saepe est. Corporis, fuga!
            </motion.p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold ">$</span>
                <span className="text-5xl font-bold text-orange-400">{plan.price}</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-orange-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                Hire Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 flex md:flex-row flex-col justify-between"
        >
          <h2 className="text-[3rem] font-medium mb-4">
            STAY UPDATED WITH <br /> OUR EVERY LATEST NEWS
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum ex ea quia <br />
           tempora vero consequatur, sint eaque eius beatae sit numquam autem soluta distinctio <br />
            repellat dicta voluptatibus ipsum veritatis.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;