import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tom Holland",
      location: "Seattle, WA",
      rating: 5,
      image: "../assets/strong-athletic-man-holding-weights.png",
      text: "Working with this team was a game-changer! Their expertise and personalized approach made buying my first home a breeze. They took the time to understand my needs and guided me through every step, making the process feel seamless. I felt confident and well-informed, and I couldn't have asked for a better experience.",
      signature: "/signature.png" // You'll need to replace this with actual signature image
    },
    // Add more testimonials here
  ];

  return (
    <div className="max-w-[85rem] mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-[3rem] font-bold text-center mb-12"
      >
        What Our Clients Are Saying
      </motion.h2>

      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-96 h-96 bg-gray-100 p-4 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-800 font-bold mb-2">{testimonial.location}</p>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gray-900 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
              <img 
                src={testimonial.signature} 
                alt="Signature" 
                className="h-12 opacity-80"
              />
            </div>
          </motion.div>
        ))}

        <div className="flex justify-end mt-8 gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-black text-white"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-black text-white"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;