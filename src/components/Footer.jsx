// components/DiscountBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';

// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] w-full text-gray-400">
      <div className="container bg-[#474747] mx-auto  py-8 md:px-20 px-8 ">
        <div className="flex gap-12 mb-12">
          {/* Left Section */}
          <div className='w-full'>
            

            <div className='flex justify-between  border-gray-500'>
              
              <p className="mb-6">
              <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-400 p-2 rounded-full">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">FITNESS HUB</h3>
            </div>

                Explore Our Gym Website For A Seamless Fitness <br />
                 Experience, Offering Expert Guidance, <br />
                Personalized Plans, And A Supportive <br /> Community To Elevate Your Workouts.
              </p>

            <div className="flex flex-col lg:flex-row items-center justify-between ">
                <div className="mb-6 lg:mb-0">
                  <h3 className="text-3xl font-bold text-white mb-2">Stop</h3>
                  <h3 className="text-3xl font-bold text-white">wishing start doing.</h3>
                </div>
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg transition-colors">
                  ENROLL NOW
                </button>
              </div>
            </div>
           
          <div className='flex border-t border-b p-10 border-gray-500 w-full justify-between'>
          <div className=" flex flex-col gap-4">
              <h4 className="text-white font-semibold mb-4">CONTACT US</h4>
              <a href="tel:+613648467354" className="text-xl">+ 61 364 846 7354</a>
      
            <div>
              <h4 className="text-white font-semibold mb-4">FOLLOW US ON</h4>
              <div className="flex gap-4">
                {['youtube', 'facebook', 'twitter', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {/* Add appropriate social media icon paths */}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Our Location</h4>
              <ul className="space-y-2">
                <li>30 New Vergenia</li>
                <li>Block No : 2456</li>
                <li>2333 Square Meter</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Working Hours</h4>
              <ul className="space-y-2">
                <li>MONDAY TO FRIDAY</li>
                <li>Block No : 2456</li>
                <li>Block No : 2456</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold ">Week Ends</h4>
              <ul className="space-y-2">
                <li>Saturday - Sunday</li>
                <li>National Holidays</li>
                <li>Local Holidays</li>
              </ul>
            </div>
          </div>
           
          </div>
        </div>
          {/* Right Section */}
         
        </div>

       {/* Copyright */}
        <div className="flex justify-between border-gray-800">
          <p className="text-sm">©All copy right reserved 2024</p>
          <p className="text-sm">Designed By: ubludesignerseed@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default  Footer;