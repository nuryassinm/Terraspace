import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' },
    { name: 'Contact', href: '/Contact' },
    { name: 'Our Pricing', href: '/OurPricing' },
    { name: 'Blogs', href: '/Blog' },
  ];

  return (
    <header className="w-full text-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4 text-2xl font-bold"
          >
            <Dumbbell className="text-[#FD0235]" />
            <h2 className="text-xl font-semibold">Muscle</h2>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-[#FD0235] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 hover:text-[#FD0235] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
