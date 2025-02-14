import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const BlogArticles = () => {
  const articles = [
    {
      title: "Legal Essentials: Understanding Documentation In Real Estate Transactions",
      image: "../assets/pexels-luis-yanez-57302-206172.jpg",
      readTime: "6 min read",
    },
    {
      title: "The Importance Of Property Valuation: Getting The Best Price For Your Home",
      image: "../assets/pexels-pixabay-209315.jpg",
      readTime: "5 min read",
    },
    {
      title: "How To Choose The Right Partner For Your Needs",
      image: "../assets/pexels-binyaminmellish-186077.jpg",
      readTime: "4 min read",
    }
  ];

  return (
    <div className="max-w-[110rem] mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-12"
      >
        Latest Blogs & Articles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <button className="text-white bg-black/50 px-4 py-2 rounded-md">
                    Read Article
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock size={16} />
              <span className="text-sm">{article.readTime}</span>
            </div>

            <h3 className="text-xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogArticles;