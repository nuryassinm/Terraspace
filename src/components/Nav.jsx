import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { GiStairs } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white"
    >
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex gap-2">
            <GiStairs className='text-black text-2xl mt-2'/>
            <h1 className="text-3xl  font-bold  text-[#0B1D27]">TerraSpace</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-lg space-x-8">
            <a href="/" className="text-[#0B1D27] text-xl font-urbanist font-medium">Home</a>
            <a href="/about" className="text-[#656E73] font-urbanist">About Us</a>
            <div className="relative group">
              <button className="flex items-center text-[#656E73] font-urbanist">
                Property
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
                <a href="#" className="block px-4 py-2 text-sm text-[#656E73] hover:bg-gray-100">Residential</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#656E73] hover:bg-gray-100">Commercial</a>
                <a href="#" className="block px-4 py-2 text-sm text-[#656E73] hover:bg-gray-100">Industrial</a>
              </div>
            </div>
            <a href="/blogs" className="text-[#656E73] font-urbanist">Blogs</a>
            </div>
            <button className="bg-[#0B1D27] hidden md:block text-white px-6 py-2 rounded-full font-urbanist">
              Let's Talk
            </button>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#0B1D27]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <a href="/" className="block px-3 py-2 text-[#0B1D27] font-medium">Home</a>
          <a href="/about" className="block px-3 py-2 text-[#656E73]">About Us</a>
          <button className="flex items-center w-full px-3 py-2 text-[#656E73]">
            Property
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <a href="/blogs" className="block px-3 py-2 text-[#656E73]">Blogs</a>
          <button className="w-full bg-[#0B1D27] text-white px-6 py-2 rounded-full mt-4">
            Let's Talk
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;