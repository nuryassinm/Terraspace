import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  const footerLinks = {
    explore: [
      { name: 'Buy', href: '#' },
      { name: 'Rent', href: '#' },
      { name: 'Short Term', href: '#' },
      { name: 'New Projects', href: '#' },
      { name: 'List Your Property', href: '#' },
    ],
    services: [
      { name: 'Property Management', href: '#' },
      { name: 'Property Valuation', href: '#' },
      { name: 'Property Exchange', href: '#' },
      { name: 'Legal Agreements', href: '#' },
    ],
    quickLinks: [
      { name: 'Blogs', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Reviews', href: '#' },
    ],
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white"></div>
                <span className="text-xl font-bold">TerraSpace</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Where Your Dream Space Becomes Reality. Building Futures. One Property at a Time.
              </p>
            </motion.div>

            {/* Email Subscription */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Are you finding a home?</h3>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-gray-700 py-2 pr-10 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 frameix All right reserved
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Country Sitemap
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;