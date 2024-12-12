// CounterSection.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: 54, label: "Employees" },
  { number: 34, label: "Programs" },
  { number: 320, label: "Cases" },
  { number: 192, label: "Donations" },
];

const CounterSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-navy-900 py-5 bg-[#1C314E] "
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center flex gap-3"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl  text-[#AA8B6E] block mb-2 border-r border-[#AA8B6E]"
              >
               <h1 className=" mr-4">{stat.number}</h1> 
              </motion.span>
              <span className="text-white mt-2  font-medium text-xl">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default CounterSection;