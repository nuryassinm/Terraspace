// components/Stats.jsx
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: '1500+', label: 'Happy Clients' },
    { number: '150+', label: 'Attorneys' },
    { number: '2000+', label: 'Case Dismis' },
    { number: '500+', label: 'Practice area' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 py-8">
      <div className="max-w-[85rem] mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-lg font-bold text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;