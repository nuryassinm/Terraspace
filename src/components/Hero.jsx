// components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-navy-900 bg-blue-600 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../assets/land.jpeg')] bg-cover bg-center" />
      
      <div className="relative max-w-[95rem] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-gray-400 mb-4">Home of Law & Order</p>
          <h1 className="text-[4.5rem] font-bold w-full text-white mb-6">
            Your <span className="text-[#C5A467]">Solution Legal <br /> </span> Consultacy
          </h1>
          <p className="text-white text-lg mb-8">
            Vitae auctor eu augue ut lectus arcu. Dictum fusce ut placerat orci nulla <br />
            pellentesque dignissim enim. Enim nunc faucibus a pellentesque sit amet <br />
            porttitor eget dolor.
          </p>
          <button className="px-6 py-3 bg-[#C5A467] text-white rounded hover:bg-[#b39355]">
            FIND OUT MORE
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;