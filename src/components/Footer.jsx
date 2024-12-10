// ContactSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Instagram, Rss, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="w-full">
      {/* Contact Form Section */}
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="relative  "
>
  {/* Background shapes */}
  <div className=" -z-10">
    <div className="w-48 h-48 rounded-full bg-cyan-400 blur-xl opacity-70 absolute -top-10 -left-10"></div>
    <div className="w-48 h-48 rounded-full bg-teal-600 blur-xl opacity-70 absolute top-20 left-20"></div>
    <div className="w-48 h-48 rounded-full bg-pink-400 blur-xl opacity-70 absolute bottom-0 right-0"></div>
  </div>

  {/* Main green circle */}
  <div className="w-64 h-64 rounded-full bg-emerald-500 relative">
    {/* Subject image */}
     <img 
        src="../assets/stylish-romantic-woman-with-flowers-jacket.png" 
        alt="Contact" 
        className="w-full max-w-md rounded-full"
       />
  </div>
</motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-[3rem] font-medium">
              FEEL FREE TO ASK  ANY <br /> QUESTIONS TO US
            </h2>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-gray-200 to-green-100 py-16">
        <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="font-bold text-xl">LAW&ORDER</h3>
              <p className="text-gray-600">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-orange-500 cursor-pointer" />
                <Twitter className="w-5 h-5 text-orange-500 cursor-pointer" />
                <Youtube className="w-5 h-5 text-orange-500 cursor-pointer" />
                <Instagram className="w-5 h-5 text-orange-500 cursor-pointer" />
                <Rss className="w-5 h-5 text-orange-500 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xl">MENU</h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About the Firm</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xl">SERVICES</h3>
              <ul className="space-y-2">
                <li>Corporate Lawyer</li>
                <li>Criminal Lawyer</li>
                <li>Family Lawyer</li>
                <li>Immigration Lawyer</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xl">WHERE WE ARE</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  2071 Jefferson Street Portsmouth, VA 23707
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  757-744-3103
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  noemail@domain.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;