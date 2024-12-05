// BlogAndVideo.jsx
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

function BlogAndVideo() {
  return (
    <div className="bg-[#1a1a1a] w-full text-white py-20">
      {/* Blog Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 mb-32"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bowel mb-4">Latest Blogs & News</h2>
          <p className="text-gray-400">
            Dive into a world of trending topics, expert opinions, and timely news bites.
            <br />
            Don't miss out, explore the latest now!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative h-[400px]">
              <img 
                src="../assets/tired-woman-raises-two-dumbbells-works-biceps-determined-unshaven-man-carries-karemat-gymnastic-training.jpg" 
                alt="Benefits of Regular Gym" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bowel mb-4">BENEFITS OF REGULAR GYM</h3>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-white"
                >
                  READ MORE <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Blog Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative h-[400px]">
              <img 
                src="../assets/beautiful-smiling-girl-with-excess-weight-sporty-top-holding-bowl-with-fruits-hands-while-happily-looking-aside-white-background.jpg" 
                alt="Best Diet for Gym" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bowel mb-4">BEST DIET FOR GYM</h3>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-white"
                >
                  READ MORE <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bowel mb-4">Watch a Video</h2>
          <p className="text-gray-400">
            Tap play and immerse yourself in moments that speak louder than
            <br />
            words - watch a video now!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-video w-full h-[700px] mx-auto"
        >
          <div className="relative h-full">
            <img 
              src="../assets/landing.jpg" 
              alt="Fitness Video" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Play className="w-8 h-8 text-white" />
              </motion.button>
            </div>
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BlogAndVideo;