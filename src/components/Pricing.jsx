// components/Pricing.jsx
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic plan",
    price: "₹200",
    period: "per month",
    description: "Basic features for up to 2 users",
    features: [
      "Limited selection of beginner workout routines.",
      "Basic meal plans with standard dietary tips.",
      "Access to a basic version of the mobile app.",
      "Basic tracking for workouts and nutrition",
      "7-day free trial."
    ],
    buttonText: "Get Started",
    isPopular: false
  },
  {
    name: "Elite plan",
    price: "₹500",
    period: "per month",
    description: "Elite features for up to 3 users",
    features: [
      "Full access to beginner, intermediate, and advanced routines.",
      "Access to live virtual classes and a library of recorded sessions.",
      "Members-only groups and challenges.",
      "Full-featured mobile app with premium features.",
      "7-day free trial."
    ],
    buttonText: "Get Started",
    isPopular: true
  },
  {
    name: "Pro plan",
    price: "₹1000",
    period: "per month",
    description: "Pro features for up to 5 users",
    features: [
      "Everything in the Elite Plan.",
      "Virtual personal training sessions",
      "Access to a basic version of the mobile app.",
      "Everything in the Elite Plan.",
      "7-day free trial."
    ],
    buttonText: "Get Started",
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <div className=" w-full text-white py-16 relative">
      {/* Top Banner */}
      <div className="absolute w-full top-0 left-0 right-0 overflow-hidden">
        <div className="flex w-full animate-scroll whitespace-nowrap py-2 bg-[#1A1A1A]">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-4 text-sm font-medium flex items-center">
              <span className="inline-block transform rotate-45 mr-2">+</span>
              FREE ONE-MONTH TRIAL
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[110rem] w-full mx-auto px-4 pt-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Liftpass
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.isPopular ? 'bg-[#2A2A2A]' : 'bg-white/5'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.isPopular ? 'text-[#7CFF01]' : ''
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold mb-4">FEATURES</h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.isPopular ? 'text-[#7CFF01]' : 'text-gray-400'
                      }`} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.isPopular
                    ? 'bg-[#7CFF01] text-black hover:bg-[#7CFF01]/90'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap py-2 bg-[#1A1A1A]">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-4 text-sm font-medium flex items-center">
              <span className="inline-block transform rotate-45 mr-2">+</span>
              FREE ONE-MONTH TRIAL
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;