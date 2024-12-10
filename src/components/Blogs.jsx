// BlogGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    category: 'GENERAL',
    title: 'AS STUDENT HEALTH AND WELLNESS ARE FINALLY FINDING',
    excerpt: 'Iaculis nunc sed augue lacus viverra vitae congue eu. Aliquam sem fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio morbi quis commodo',
    date: 'May 12, 2024',
    comments: 'No Comments',
    image: '../assets/corporate-business-people.jpg',
  },
  {
    category: 'EDUCATION',
    title: 'WE ARE PLANNING A THREE-PRONGED ATTACK',
    excerpt: 'Iaculis nunc sed augue lacus viverra vitae congue eu. Aliquam sem fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio morbi quis commodo',
    date: 'May 11, 2024',
    comments: 'No Comments',
    image: '../assets/pexels-canvastudio-3194518.jpg',
  },
  {
    category: 'FAMILY',
    title: 'WHAT THIS TOOK ON MY END WAS DEVELOPING',
    excerpt: 'Iaculis nunc sed augue lacus viverra vitae congue eu. Aliquam sem fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio morbi quis commodo',
    date: 'May 10, 2024',
    comments: 'No Comments',
    image: '../assets/pexels-canvastudio-3194521.jpg',
  },
  {
    category: 'PERSONAL CASES',
    title: 'ENHANCING STUDENT HEALTH AND WELLNESS IN ACPS',
    excerpt: 'Iaculis nunc sed augue lacus viverra vitae congue eu. Aliquam sem fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio morbi quis commodo',
    date: 'May 09, 2024',
    comments: 'No Comments',
    image: '../assets/african-american-women-sitting-table-near-document-pen-figure-gavel.jpg',
  },
  {
    category: 'CORPORATE',
    title: 'THE ESSA ADVOCACY ROLLER COASTER THAT WAS 2023',
    excerpt: 'Iaculis nunc sed augue lacus viverra vitae congue eu. Aliquam sem fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio morbi quis commodo',
    date: 'May 08, 2024',
    comments: 'No Comments',
    image: '../assets/still-life-with-scales-justice.jpg',
  },
  {
    category: 'FAMILY',
    title: 'HEALTH AND PHYSICAL EDUCATION ADVOCATES VISIT CAPITOL HILL',
    excerpt: 'Iaculis nunc sed augue lacus viverra vitae congue eu. Aliquam sem fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio morbi quis commodo',
    date: 'May 07, 2024',
    comments: 'No Comments',
    image: '../assets/smiling-corporate-business-people.jpg',
  },
];

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col  h-full"
    >
      <div className="relative mb-4">
        <div className="aspect-w-16 aspect-h-9 skeleton-loading rounded-lg overflow-hidden">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 text-sm rounded-md">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-3 hover:text-orange-500 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
            Read More <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.comments}</span>
        </div>
      </div>
    </motion.div>
  );
};

const BlogGrid = () => {
  return (
    <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;