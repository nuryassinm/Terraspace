// PricingSection.jsx
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter Package",
    price: "10.99",
    isRecommended: false,
    description: "Accessible Facilities, Introductory Classes, and Flexible Membership Options Await",
    benefits: [
      "Ideal for beginners or those seeking a flexible commitment",
      "Access to basic gym facilities and equipment"
    ],
    buttonText: "Upgrade to Pro",
    buttonClass: "border border-[#FD0235] text-[#FD0235] hover:bg-[#FD0235] hover:text-white"
  },
  {
    name: "Pro Package",
    price: "14.00",
    isRecommended: true,
    description: "Accessible Facilities, Introductory Classes, and Flexible Membership Options Await",
    benefits: [
      "Perfect for dedicated fitness enthusiast",
      "Full access to all gym facilities, equipment, and group classes"
    ],
    buttonText: "Upgrade to Pro",
    buttonClass: "bg-[#FD0235] text-white hover:bg-[#d01b3d]"
  },
  {
    name: "Elite Package",
    price: "29.99",
    isRecommended: false,
    description: "Accessible Facilities, Introductory Classes, and Flexible Membership Options Await",
    benefits: [
      "Designed for committed to peak performance",
      "Ideal for beginners or those seeking a flexible commitment"
    ],
    buttonText: "Upgrade to Pro",
    buttonClass: "border border-[#FD0235] text-[#FD0235] hover:bg-[#FD0235] hover:text-white"
  }
];

const PricingSection = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Choose Your Path OF Fitness</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the Perfect Membership Option to Fit Your Lifestyle and Goals. Tailored Options 
          to Suit Every Schedule, Budget, and Ambition. Choose the Perfect Plan
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[100rem] mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-lg p-6 ${
              plan.isRecommended ? 'border-2 border-[#FD0235]' : 'border border-gray-200'
            }`}
          >
            {plan.isRecommended && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#FD0235] text-white px-4 py-1 rounded-full text-sm">
                  ♦ Recommended
                </span>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-2 text-[#FD0235]">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>

            <button className={`w-full py-3 px-6 rounded-md transition duration-300 mb-6 ${plan.buttonClass}`}>
              {plan.buttonText}
            </button>

            <div className="text-left">
              <p className="text-gray-600 mb-4">Benefit if upgrade</p>
              {plan.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-start space-x-2 mb-3">
                  <Check className="text-[#FD0235] w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;