// components/LatestPosts.jsx
import { motion } from 'framer-motion';

const latestPosts = [
  {
    id: 1,
    title: "THE WHOLE HOUSE IS MADE IN LIGHT COLORS WALLS OF KITCHEN",
    image: "../assets/pexels-823sl-2294361.jpg",
    author: "For Gym",
    date: "May 6, 2012",
    excerpt: "If you are looking for inspiration for the interior design of your home, Elison Residence is perfect for you. The whole house is made in light colors"
  },
 
];
const latestPost = [
    {
      id: 1,
      title: "RESIDENTIAL CABIN RENDERING BY APPLET 3D",
      author: "For Gym",
      date: "November 16, 2014",
      excerpt: "If you are looking for inspiration for the interior design of your home, Elison Residence is perfect for you. The whole house is made in light colors"
    },
    {
      id: 2,
      title: "ELLISON RESIDENCE INTERIOR AND FLOOR PLANS",
      author: "For Gym",
      date: "November 26, 2015",
      excerpt: "If you are looking for inspiration for the interior design of your home, Elison Residence is perfect for you. The whole house is made in light colors"
    }
  ];

export default function LatestPosts() {
  return (
    <section className="mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Latest posts
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mb-4 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <h3 className="font-bold mb-2 text-2xl group-hover:text-red-500 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </motion.article>
        ))}
        {latestPost.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group  cursor-pointer"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mb-4 overflow-hidden"
            >
             
            </motion.div>
            <h3 className="font-bold mb-2 text-2xl group-hover:text-red-500 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
            <div className="flex flex-col  text-sm text-gray-500">
                <p className='text-red-500 font-bold text-md mb-4'>posted on</p>
                <div>
              <span className=' p-2 bg-slate-100 rounded-full'>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
