import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const DiscoverSpaces = () => {
  const images = [
    {
      id: 1,
      url: "../assets/pexels-heyho-8146318.jpg",
      isMain: true,
      className: "col-span-2 row-span-1"
    },
    {
      id: 2,
      url: "../assets/pexels-expect-best-79873-323775.jpg",
      isMain: false,
      className: "col-span-2 row-span-1"
    },
    {
      id: 3,
      url: "../assets/miami-luxury-house.jpg",
      isMain: false,
      className: "col-span-1 row-span-1"
    },
    {
      id: 4,
      url: "../assets/miami-luxury-house.jpg",
      isMain: false,
      className: "col-span-2 row-span-1"
    },
    {
      id: 5,
      url: "../assets/wintry-landscape-scenery-with-modified-cross-country-skiing-way.jpg",
      isMain: false,
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <div className="max-w-[110rem] mx-auto px-4 py-16 font-urbanist">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl lg:6xl font-bold flex flex-col gap-7 text-[#0B1D27] max-w-5xl">
            Discover Stylish Spaces and  <span>Inspiring Details</span> 
          </h2>
          <button className="flex items-center gap-2 border border-[#0B1D27] rounded-full px-6 py-2 text-[#0B1D27] hover:bg-[#0B1D27] hover:text-white transition-colors duration-300">
            View Listings
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className={`relative rounded-2xl overflow-hidden ${image.className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-[3/2] w-full bg-[#D9D9D9]">
              {/* Replace with actual image */}
              <img src={image.url} className="w-full h-full bg-gradient-to-b from-transparent to-black/20" />
            </div>
            {image.isMain && (
              <button className="absolute left-1/2 bottom-1/2 h-40 w-40  bg-[#0B1D27]/80 text-white px-4 py-2 rounded-full backdrop-blur-sm hover:bg-[#0B1D27] transition-colors duration-300">
                View Details
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DiscoverSpaces;