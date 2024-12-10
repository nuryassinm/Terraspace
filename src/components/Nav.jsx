import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Scale, Menu, X } from "lucide-react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 "
    >
      <div className="mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-serif font-bold flex items-center">
            <span className="mr-1">
              <Scale className="h-5 w-5 text-orange-400" />
            </span>
            LAW&ORDER
          </span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-md text-gray-700">
          <a href="/" className="hover:text-orange-500 transition ease-in-out">
            Home
          </a>
          <a
            href="/about"
            className="hover:text-orange-500 transition ease-in-out"
          >
            About The Firm
          </a>
          <div className="relative group">
            <button className="hover:text-orange-500 transition ease-in-out">
              Our Blog
            </button>
            <div className="absolute left-0 mt-2 hidden w-32 bg-white border border-gray-200 shadow-lg group-hover:block">
              <a
                href="/blog/post-1"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                Post 1
              </a>
              <a
                href="/blog/post-2"
                className="block px-4 py-2 hover:bg-orange-100"
              >
                Post 2
              </a>
            </div>
          </div>
          <a
            href="/contact"
            className="hover:text-orange-500 transition ease-in-out"
          >
            Contact Us
          </a>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="tel:+7577443103"
          className="hidden md:flex items-center space-x-2 bg-orange-500 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition ease-in-out"
        >
          <Phone className="h-5 w-5" />
          <span>+757 744 3103</span>
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg border-t border-gray-200">
          <a
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
          >
            About The Firm
          </a>
          <a
            href="/blog"
            className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
          >
            Our Blog
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
          >
            Contact Us
          </a>
          <a
            href="tel:+7577443103"
            className="flex items-center justify-center mt-4 bg-orange-500 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition ease-in-out"
          >
            <Phone className="h-5 w-5 mr-2" />
            <span>+757 744 3103</span>
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default NavbarComponent;
