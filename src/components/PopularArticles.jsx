// components/PopularArticles.jsx
import { motion } from 'framer-motion';

const popularArticles = [
  {
    id: 1,
    title: "GLOBAL FREELANCER SURVEY REPORT 2022",
    image: "../assets/young-women-exercising-together (1).jpg",
    author: "For Gym",
    date: "May 9, 2014",
    excerpt: "Survey the latest offerings deals with an EMG led to the biggest industry triumph of the decade"
  },
  {
    id: 2,
    title: "GLOBAL FREELANCER SURVEY REPORT 2022",
    image: "../assets/woman-training-weightlifting-gym.jpg",
    author: "For Gym",
    date: "May 9, 2014",
    excerpt: "Survey the latest offerings deals with an EMG led to the biggest industry triumph of the decade"
  },
  {
    id: 3,
    title: "GLOBAL FREELANCER SURVEY REPORT 2022",
    image: "../assets/side-view-man-climbing-rope.jpg",
    author: "For Gym",
    date: "May 9, 2014",
    excerpt: "Survey the latest offerings deals with an EMG led to the biggest industry triumph of the decade"
  },
  {
    id: 4,
    title: "GLOBAL FREELANCER SURVEY REPORT 2022",
    image: "../assets/pexels-victorfreitas-949126 (1).jpg",
    author: "For Gym",
    date: "May 9, 2014",
    excerpt: "Survey the latest offerings deals with an EMG led to the biggest industry triumph of the decade"
  },
  {
    id: 5,
    title: "GLOBAL FREELANCER SURVEY REPORT 2022",
    image: "../assets/pexels-juanfermosquera-17754916.jpg",
    author: "For Gym",
    date: "May 9, 2014",
    excerpt: "Survey the latest offerings deals with an EMG led to the biggest industry triumph of the decade"
  },
  {
    id: 6,
    title: "GLOBAL FREELANCER SURVEY REPORT 2022",
    image: "../assets/pexels-franco-monsalvo-252430633-23531688.jpg",
    author: "For Gym",
    date: "May 9, 2014",
    excerpt: "Survey the latest offerings deals with an EMG led to the biggest industry triumph of the decade"
  },
  // Add more articles as needed
];

export default function PopularArticles() {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          Popular Articles
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          JOIN US NOW
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularArticles.map((article, index) => (
          <motion.article
            key={article.id}
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
                src={article.image}
                alt={article.title}
                className="w-full rounded-xl h-56 object-cover"
              />
            </motion.div>
            <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}