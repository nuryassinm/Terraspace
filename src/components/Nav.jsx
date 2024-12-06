import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="relative max-w-[110rem] w-full bg-transparent border-gray-700 text-white mx-auto px-4 md:flex md:items-center md:justify-between md:px-6 lg:px-8 py-4">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold" href="#">
            LiftUp
          </a>
          <div className="md:hidden">
            <button
              type="button"
              className="flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col md:flex-row justify-end items-center gap-8 mt-4 md:mt-0 md:pl-5">
          <a href="#" className="font-medium text-white">
            HOME
          </a>
          <a href="#" className="font-medium text-gray-400 hover:text-white">
            PROGRAMS
          </a>
          <a href="#" className="font-medium text-gray-400 hover:text-white">
            TRAINERS
          </a>
          <a href="#" className="font-medium text-gray-400 hover:text-white">
            BLOG
          </a>
          <a href="#" className="font-medium text-gray-400 hover:text-white">
            ABOUT US
          </a>
          <button className="flex items-center gap-x-2 text-gray-400 hover:text-white">
            <span className="sr-only">Account</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4">
            <a href="#" className="font-medium text-white">
              HOME
            </a>
            <a href="#" className="font-medium text-gray-200 hover:text-white">
              PROGRAMS
            </a>
            <a href="#" className="font-medium text-gray-200 hover:text-white">
              TRAINERS
            </a>
            <a href="#" className="font-medium text-gray-200 hover:text-white">
              BLOG
            </a>
            <a href="#" className="font-medium text-gray-200 hover:text-white">
              ABOUT US
            </a>
            <button className="flex items-center gap-x-2 text-gray-400 hover:text-white">
              <span className="sr-only">Account</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
