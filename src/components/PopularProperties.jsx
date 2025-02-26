import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const PropertySection = () => {
  const [activeFilter, setActiveFilter] = useState('Featured');
  const [imageLoaded, setImageLoaded] = useState({});

  const filters = ['Featured', 'Apartments', 'Condominium', 'Residential', 'Cottage'];

  const properties = [
    {
      id: 1,
      name: 'Sunnyvale Retreat',
      location: '23 Sunnyvale Rd',
      price: 450000,
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: '../assets/pexels-e-photography-1475938.jpg'
    },
    {
      id: 2,
      name: 'Mountainview Villa',
      location: '456 Aspen Heights',
      price: 360000,
      beds: 5,
      baths: 4,
      sqft: 3800,
      image: '../assets/pexels-expect-best-79873-323775.jpg'
    },
    {
      id: 3,
      name: 'Seaside Cottage',
      location: 'Cape Cod, MA',
      price: 570000,
      beds: 3,
      baths: 2,
      sqft: 1200,
      image: '../assets/pexels-binyaminmellish-186077.jpg'
    },
    {
      id: 4,
      name: 'Urban Little Oasis',
      location: 'Cityview St, Chicago',
      price: 825000,
      beds: 5,
      baths: 3,
      sqft: 4000,
      image: '../assets/miami-luxury-house.jpg'
    },
    {
      id: 5,
      name: 'Lakeside Manor',
      location: 'Lakefront, Tahoe',
      price: 575000,
      beds: 3,
      baths: 2,
      sqft: 1500,
      image: '../assets/snowy-country-house-winter.jpg'
    },
    {
      id: 6,
      name: 'Country Charm',
      location: 'Ranch Rd, Tx',
      price: 460000,
      beds: 3,
      baths: 2,
      sqft: 2000,
      image: '../assets/wintry-landscape-scenery-with-modified-cross-country-skiing-way.jpg'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl flex flex-col gap-8 font-bold text-[#0B1D27] font-urbanist mb-12">
          Explore Our Highly Rated <span>Apartments & Buildings</span>
          
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-urbanist transition-all
                ${activeFilter === filter 
                  ? 'bg-[#0B1D27] text-white' 
                  : 'bg-white text-[#656E73] border border-[#D9D9D9] hover:border-[#0B1D27]'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Property Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {properties.map((property) => (
          <motion.div
            key={property.id}
            variants={item}
            className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Property Image */}
            <div className="relative aspect-[3/2] overflow-hidden">
              {!imageLoaded[property.id] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(prev => ({...prev, [property.id]: true}))}
              />
            </div>

            {/* Property Details */}
            <div className="p-6">
              <div className="flex items-center text-[#656E73] mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="font-urbanist text-sm">{property.location}</span>
              </div>
              
              <h3 className="text-xl font-bold text-[#0B1D27] font-urbanist mb-2">
                {property.name}
              </h3>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-[#0B1D27] font-urbanist">
                  ${property.price.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between text-[#656E73] border-t pt-4">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.beds} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.baths} Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.sqft} sq.ft</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PropertySection;