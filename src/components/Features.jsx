// Features.jsx
import { motion } from 'framer-motion';
import { Dumbbell, ClipboardList, Sprout } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="w-12 h-12 text-green-500" />,
    title: "QUALITY EQUIPMENT",
    description: "Reliable performance starts with quality equipment. Our products are built to last, ensuring for success."
  },
  {
    icon: <Sprout className="w-12 h-12 text-green-500" />,
    title: "CLEANLINESS",
    description: "Cleanliness is the cornerstone of a healthy and inviting promoting well-being and positivity."
  },
  {
    // icon: <Shower className="w-12 h-12 text-green-500" />,
    title: "SHOWER SERVICE",
    description: "Cleanliness is the cornerstone of a healthy and inviting promoting well-being and positivity."
  },
  {
    icon: <ClipboardList className="w-12 h-12 text-green-500" />,
    title: "HEALTHY NUTRITION PLAN",
    description: "Empower your well-being with our healthy nutrition plan wholesome choices tailored just for you."
  }
];

const trainingCategories = [
  {
    image: "../assets/young-women-exercising-together (1).jpg",
    title: "GROUP FITNESS",
    icon: "../assets/Corelli Financial Group.svg"
  },
  {
    image: "../assets/front-view-woman-doing-weight-training.jpg",
    title: "PERSONAL FITNESS",
    icon: "../assets/Black SVG GYM Fitness Club with Musccle Man.svg"
  },
  {
    image: "../assets/fitness1.jpg",
    title: "GYM COMPETITION",
    icon: "../assets/icons8-muscle-flexing-50.png"
  }
];

function Features() {
  return (
    <div className="bg-[#1a1a1a] w-full text-white py-20">
      {/* Push Your Health Forward Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bowel mb-6">Push Your Health Forward</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Embark on a journey towards better health and vitality. Every step forward is a step towards a stronger, more vibrant you. Push your boundaries, push your health forward, and let your inner strength shine.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="flex justify-center mb-4 text-white">{feature.icon}</div>
              <h3 className="text-xl font-bowel mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-400 text-white px-8 py-3 rounded-md mt-12"
        >
          GET TO KNOW US
        </motion.button>
      </motion.div>

      {/* Training Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 text-center mt-20"
      >
        <h2 className="text-4xl md:text-5xl font-bowel mb-6">Look at Our Training</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Unleash your potential through dynamic gym training sessions, where strength meets endurance for a healthier, stronger you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
                  <img src={category.icon} alt="" className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bowel">{category.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 mx-auto mt-12 text-orange-400 hover:text-orange-500"
        >
          Show More 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Features;