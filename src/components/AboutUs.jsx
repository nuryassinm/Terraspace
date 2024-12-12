// components/AboutUs.jsx
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-20 px-4 max-w-[95rem] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1  gap-12"
      >
        <div className='flex justify-between md:flex-row flex-col'>
          <h2 className="text-5xl font-bold mb-8">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br />
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, <br />
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 19. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-[600px] relative overflow-hidden"
            >
              <img 
                src="../assets/still-life-with-scales-justice (2).jpg" 
                alt="Law Library Statue" 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-[292px] relative overflow-hidden"
            >
              <img 
                src="../assets/grey-marble-column-details-building.jpg" 
                alt="Supreme Court" 
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-[292px] relative overflow-hidden"
            >
              <img 
                src="../assets/still-life-with-scales-justice (3).jpg" 
                alt="Law Books" 
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;