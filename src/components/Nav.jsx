import { useState } from 'react';
import { Phone, Search, User, ShoppingCart } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 shadow-md">
      <nav className="max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl flex gap-2 font-semibold items-center" href="#">
            <img
              src="../assets/icons8-muscle-48.png"
              alt="Fitness Hub"
              className="h-10"
            />
            <h1 className="text-orange-500">Fitness Hub</h1>
          </a>
          {/* Hamburger Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="p-2 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-500 transition-all text-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-center sm:mt-0 sm:pl-5">
            {['HOME', 'PAGES', 'BLOG', 'EVENTS', 'CONTACT'].map((link, index) => (
              <a
                key={index}
                className="font-medium text-gray-600 hover:text-gray-400 transition-colors duration-300 sm:px-4 sm:py-2 relative group"
                href="#"
              >
                <span
                  className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-md"
                ></span>
                {link}
              </a>
            ))}
            <a
              className="font-medium text-green-500 hover:text-green-600 flex items-center gap-2"
              href="#"
            >
              <Phone size={16} />
              CUSTOMERS SUPPORT
            </a>
          </div>
        </div>

        {/* Icons */}
        <div className="hidden sm:flex items-center gap-4 ml-5">
          <Search className="text-gray-600 hover:text-gray-400 cursor-pointer" size={20} />
          <User className="text-gray-600 hover:text-gray-400 cursor-pointer" size={20} />
          <ShoppingCart className="text-gray-600 hover:text-gray-400 cursor-pointer" size={20} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
