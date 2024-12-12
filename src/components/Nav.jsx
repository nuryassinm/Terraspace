// components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons from Lucid Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start bg-[#1c314e] sm:flex-nowrap z-50 w-full  text-sm py-5">
      <nav className="max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center">
            <span className="text-4xl font-raleway text-white md:mr-3 mr-1">W</span>
            <a className="text-3xl font-semibold text-white" href="#">
              WISELAW
            </a>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 sm:hidden inline-flex justify-center items-center gap-2 rounded-md border text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center w-full sm:w-auto mt-4 sm:mt-0`}
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white text-lg font-medium">
            <a href="#" className="font-medium hover:text-gray-300">
              Home
            </a>
            <a href="#" className="font-medium hover:text-gray-300">
              Attorneys
            </a>
            <a href="#" className="font-medium hover:text-gray-300">
              Practice Areas
            </a>
            <a href="#" className="font-medium hover:text-gray-300">
              About Us
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-[#C5A467] text-white rounded hover:bg-[#b39355]"
            >
              Contact Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
