// BlogSection.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 TIPS PREPARE MEALS",
    image: "../assets/lunch.jpg",
    description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR, AMET SED ELEMENTUM."
  },
  {
    id: 2,
    title: "HOME TO MAXIMISE TIME",
    image: "../assets/side-view-man-climbing-rope.jpg",
    description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR, AMET SED ELEMENTUM."
  },
  {
    id: 3,
    title: "SIMPLE CONDITION",
    image: "../assets/high-angle-women-gym-training.jpg",
    description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR, AMET SED ELEMENTUM."
  }
];

const BlogSection = () => {
  return (
    <section className="bg-[#222222] w-full py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[105rem] mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Latest Blogs Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-[#000815] text-white">
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-[#DADADA] text-sm mb-4">{post.description}</p>
                <button className="flex items-center text-[#FF7907] hover:text-[#ff9137] transition-colors">
                  VIEW HERE
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Join Our Community Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 max-w-[90rem] mx-auto"
      >
        <div className="bg-[#77FF07]  h-[400px] rounded-3xl p-12  text-center">
          <h2 className="text-6xl font-bold mt-20 text-[#000815] mb-8">
            Join Our Community
          </h2>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-6 py-3 rounded-l-full bg-white text-[#222222] focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#000815] text-white rounded-r-full font-semibold"
            >
              Join Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;