
// components/MapContainer.jsx
import { motion } from 'framer-motion';

export default function MapContainer() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px] mb-8 rounded-lg overflow-hidden"
    >
      {/* Replace with actual Google Maps integration */}
      <div className="w-full h-full bg-gray-200">
        <img 
          src="../assets/pexels-lara-jameson-8828584.jpg" 
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}
 