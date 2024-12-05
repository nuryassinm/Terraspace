// components/Mentors.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Mentors = () => {
    const mentors = [
      {
        name: "Ethan Thompson",
        role: "Weight Lifting Trainer",
        image: "../assets/athletic-man-running-black-background.png",
        socialLinks: {
          youtube: "#",
          facebook: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Marcus Rodriguez",
        role: "Weight Lifting Trainer",
        image: "../assets/healthy-fatigue-dark-skinned-man-takes-break-after-outdoor-workout-holds-bottle-energy-drink-has-pensive-look-aside-models-outside-alone-refreshes-with-water-tries-rejuvenate-being-strong.png",
        socialLinks: {
          youtube: "#",
          facebook: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Adrian Miller",
        role: "Weight Lifting Trainer",
        image: "../assets/strong-athletic-man-holding-weights.png",
        socialLinks: {
          youtube: "#",
          facebook: "#",
          twitter: "#",
          instagram: "#"
        }
      }
    ];
  
    return (
      <section className="bg-[#1a1a1a] w-full py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Mentors</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn from seasoned experts—our mentors are here to inspire and empower you.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative group">
                  <div className="aspect-square rounded-full overflow-hidden bg-gray-800 mb-6">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href={mentor.socialLinks.youtube} className="text-red-500 hover:text-red-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                      </a>
                      {/* Add other social media icons similarly */}
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold">{mentor.name}</h3>
                <p className="text-gray-400">{mentor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
 export default Mentors