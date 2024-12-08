// App.jsx
import { motion } from 'framer-motion';
import Nav from './Nav';
import { Dumbbell } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-[#1B1F13] bg-[url('../assets/landing3.jpg')] bg-cover bg-center
 w-full min-h-screen font-raleway">
      <Nav />
      <main className="container flex mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row py-20  items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white"
          >
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EMPOWER<br />
              YOUR <span className="text-[#FD0235]">FITNESS</span><br />
              JOURNEY!
            </h1>
            <p className="text-[#EFEEE] mb-8 max-w-4xl">
              Empower Your Fitness Journey Unleash Your Potential, Build
              Your Strength, and Transform Your Body with Our Expert
              Guidance and State-of-the-Art Facilities
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FD0235] text-white px-8 py-3 rounded-md font-semibold"
            >
              JOIN US NOW
            </motion.button>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 mt-8 md:mt-0"
          >
            <img
              src="../assets/landin.jpg" // Replace with actual image path
              alt="Fitness Training"
              className="rounded-lg w-full h-auto"
            />
          </motion.div> */}
        </div>
      </main>
    </div>
  );
};

export default Hero;