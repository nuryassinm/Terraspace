import { motion } from 'framer-motion';
import LatestPosts from './LatestPosts';
import PopularArticles from './PopularArticles';

export default function Blogs() {
  return (
    <div className="max-w-[100rem]  mx-auto py-20">
      <LatestPosts />
      <PopularArticles />
    </div>
  );
}