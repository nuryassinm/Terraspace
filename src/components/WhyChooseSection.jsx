// WhyChooseSection.jsx
import { motion } from 'framer-motion';
import { Zap, Heart, Users, Apple } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "Elite Training Zones",
    description: "Step into our specialized training zones meticulously designed for every fitness need"
  },
  {
    icon: <Heart className="w-8 h-8 text-[#FD0235]" />,
    title: "Holistic Wellness Center",
    description: "Immerse yourself in our holistic wellness oasis, featuring amenities aimed at nurturing your body"
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Muscle Group Fitness Studios",
    description: "Dive into our diverse array of group fitness experiences within our spacious studios"
  },
  {
    icon: <Apple className="w-8 h-8 text-yellow-500" />,
    title: "Nutrition & Lifestyle Hub",
    description: "Elevate your nutrition and lifestyle choices in our comprehensive hub dedicated to holistic health"
  }
];

const services = [
  {
    title: "Training Programs",
    image: "../assets/pexels-823sl-2294361.jpg",
    description: "Experience tailored workout regimens crafted by our expert trainers to suit your unique goals, fitness level, and preferences"
  },
  {
    title: "Nutritional Coaching",
    image: "../assets/pexels-foadshariyati-29667373.jpg",
    description: "Unlock the power of optimal nutrition with personalized meal plans, dietary guidance, and ongoing support from our certified"
  },
  {
    title: "Group Fitness Classes",
    image: "../assets/pexels-cottonbro-4761792.jpg",
    description: "Energize your workouts with our diverse range of group fitness classes, led by passionate instructors and designed"
  },
  {
    title: "Recovery and Wellness",
    image: "../assets/pexels-franco-monsalvo-252430633-23531688.jpg",
    description: "Prioritize your body's recovery and overall wellness with our specialized recovery sessions, including massage therapy"
  }
];

const WhyChooseSection = () => {
  return (
    <div className="py-20 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center justify-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Why choose Muscle ?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the MuscleFarge Difference: Expert Coaching, Cutting-Edge Equipment, and 
          a Community Committed to Your Success
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FD0235] text-white px-8 py-3 rounded-md font-semibold"
        >
          JOIN US NOW
        </motion.button>
      </div>

      {/* Tailored Services Section */}
      <div className="bg-[#1B1112] text-white py-20 px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Tailored Services for Your<br />Ultimate Transformation
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Customized Programs, Expert Guidance, and Unlimited Support to Achieve Your Fitness Goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;