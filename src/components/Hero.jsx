// App.jsx
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Nav from './Nav';

function App() {
  return (
    <div className="min-h-screen w-full  font-bowel">
      <Nav />
      <main className="relative">
      <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute inset-0"
              >
                <img 
                  src="../assets/man-women-doing-crunches.jpg" 
                  alt="Fitness Class" 
                  className="rounded-lg w-full h-full"
                />
              </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-[100rem] mx-auto px-4"
        >
          <div className="relative min-h-screen flex  py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
              {/* Left Content */}
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                  <h1 className="text-5xl lg:text-[5rem] font-bold text-[#FBEEDE]">
                  Elevate your fitness journey. Enroll in our gym classes now!
                </h1>
                <p className=" text-lg text-[#FBEEDE]">
                  Our user-friendly platform makes managing transactions a breeze, ensuring <br />
                  a hassle-free experience for you and your team join our gym classes and <br />
                  unlock your full potential.
                </p>
                <div className="flex gap-4 items-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-400 text-white px-8 py-3 rounded-md"
                  >
                    ENROLL NOW
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center t  p-2 gap-2 text-gray-50"
                  >
                    <Play className="w-12 h-12 bg-green-500 p-3 text-white rounded-full" />
                    Watch a Video
                  </motion.button>
                </div>
                <div className="pt-8">
                  <h2 className="text-[3rem]  font-bold text-gray-300">
                    20 YEARS OF <br /> SERVICE
                  </h2>
                </div>
              </motion.div>

              {/* Right Content - Image */}
             
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;