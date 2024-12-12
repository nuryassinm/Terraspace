// components/Heritage.jsx
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const timelineEvents = [
  { year: '1968', title: 'Founded in Hawaii', description: 'Non lectus aliquam tortor malesuada pellentesque.' },
  { year: '1976', title: 'Opening new office', description: 'Non lectus aliquam tortor malesuada pellentesque.' },
  { year: '1986', title: 'Firm of the year', description: 'Non lectus aliquam tortor malesuada pellentesque.' },
  { year: '1995', title: 'Opening new office', description: 'Non lectus aliquam tortor malesuada pellentesque.' },
  { year: '2003', title: 'Best firm award', description: 'Non lectus aliquam tortor malesuada pellentesque.' },
];

const Heritage = () => {
  return (
    <section className="py-20 px-4 max-w-[95rem] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gray-600 mb-2">Our Past & Our Future</p>
        <h2 className="text-5xl font-bold mb-5">Our Heritage</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative mb-20">
        {/* Timeline Line */}
        <div className="absolute top-8 left-0 right-0 h-[2px] bg-[#C5A467]" />
        
        {/* Timeline Events */}
        <div className="relative grid md:grid-cols-5 grid-cols-2  gap-4">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center "
            >
              {/* Dot */}
              <div className="w-4 h-4 bg-[#C5A467] rounded-full mb-4" />
              
              {/* Content */}
              <div className={`text-center ${index % 2 === 0 ? 'mt-8' : '-mt-24'}`}>
                <span className="text-[#C5A467] text-2xl font-light">{event.year}</span>
                <h3 className="font-semibold mt-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative  h-[500px] w-full aspect-video overflow-hidden">
          <img 
            src="../assets/african-american-women-sitting-table-near-document-pen-figure-gavel.jpg" 
            alt="Team Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
              >
                <Play className="w-6 h-6 text-[#C5A467] ml-1" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Heritage;