// Hero.jsx
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const Hero = () => {
  return (
    <div className="max-w-[110rem] mx-auto px-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[4rem] font-serif mb-6">
            BEST LAW FIRM
            <br />
            SINCE 1994
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.
          </p>
          <div className="flex justify-between">
          <button className="bg-orange-500 h-12 text-white px-8 py-3 rounded-md">
            Our Services
          </button>

          <div className="">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-4">
                {/* Sample avatar images */}
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white text-sm">
                  60+
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p className="font-semibold">+60 CUSTOMERS</p>
              <div className="flex items-center">
                <span className="text-orange-500">★</span>
                <span>4.9 (5.8k Review)</span>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
        </div>
        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400 rounded-full blur-lg"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-lg"></div>
            <div className="relative bg-emerald-800 h-[500px] w-fit rounded-xl p-8">
              <img
                src="../assets/still-life-with-scales-justice.png"
                alt="Justice Statue"
                className="w-96 relative bottom-28"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20 md:flex-row flex-col justify-between"
      >
        <h2 className="text-[3rem] font-serif mb-6">
          EFFICIENT SOLUTIONS
          <br />
          THAT YOUR COMPANY
          <br />
          NEEDS
        </h2>
        <p className="text-gray-400 text-lg">
          Non diam phasellus vestibulum lorem sed risus ultricies. Ut venenatis <br />
          tellus in metus vulputate eu. Habitant morbi tristique senectus et netus <br />
          et malesuada. Netus et malesuada fames ac turpis egestas.
        </p>
      </motion.div>
    </div>
  );
};
export default Hero;