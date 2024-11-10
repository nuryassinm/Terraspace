// components/Navbar.jsx
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Importing icons for menu toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-transparent px-6 py-4">
      <nav className="mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-black">ZONIXX</a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700">About</a>
          <a href="#" className="text-gray-700">Trainings</a>
          <a href="#" className="text-gray-700">Testimonials</a>
          <a href="#" className="text-gray-700">Contacts</a>
          <button className="px-6 py-2 rounded-full border border-black text-sm">
            JOIN TODAY
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#" className="text-gray-700" onClick={toggleMenu}>About</a>
              <a href="#" className="text-gray-700" onClick={toggleMenu}>Trainings</a>
              <a href="#" className="text-gray-700" onClick={toggleMenu}>Testimonials</a>
              <a href="#" className="text-gray-700" onClick={toggleMenu}>Contacts</a>
              <button
                onClick={toggleMenu}
                className="px-6 py-2 rounded-full border border-black text-sm"
              >
                JOIN TODAY
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
