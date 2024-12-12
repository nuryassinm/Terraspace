// components/PracticeAreas.jsx
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const PracticeAreas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const practices = [
    { title: 'Criminal Law', image: '../assets/criminal-law-1.jpg' },
    { title: 'Criminal Law', image: '../assets/criminal-law-2.jpg' },
    { title: 'Criminal Law', image: '../assets/criminal-law-3.jpg' },
    { title: 'Criminal Law', image: '../assets/criminal-law-4.jpg' },
    { title: 'Criminal Law', image: '../assets/criminal-law-1.jpg' },
    { title: 'Criminal Law', image: '../assets/criminal-law-2.jpg' },
    { title: 'Criminal Law', image: '../assets/criminal-law-3.jpg' },
    { title: 'Criminal Law', image: '../assets/criminal-law-4.jpg' },
    
    // Add more practice areas as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(practices.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(practices.length / 4) - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 max-w-[95rem] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          Our Practice <span className="text-[#C5A467]">Areas</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Vitae auctor eu augue ut lectus arcu. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.
          Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.
        </p>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 md:flex-row flex-col"
            initial={{ x: 0 }}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ duration: 0.5 }}
          >
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[calc(25%-1.5rem)] relative group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60" />
                  <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                    {practice.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default PracticeAreas;