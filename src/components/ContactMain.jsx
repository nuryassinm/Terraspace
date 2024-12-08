// App.jsx
import { motion } from 'framer-motion';
import Nav from './Nav';
import { Dumbbell } from 'lucide-react';

const ContactMain = () => {
  return (
    <div className="bg-[#1B1F13] bg-[url('../assets/landing3.jpg')] bg-cover bg-center
 w-full  font-raleway h-[40rem]">
      <Nav />
      <main className="container flex mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row py-20  items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" text-white text-center w-full"
          >
            
            <h1 className="text-[3rem] uppercase md:text-[5rem] font-bold mb-6">
              Contact
               <span className="text-[#FD0235] pl-2">Us</span><br />
            
            </h1>
            <p className="text-[#EFEEE] mb-8 max-w-5xl">
              Empower Your Fitness Journey Unleash Your Potential, Build 
              Your Strength, and Transform Your <br /> Body with Our Expert
              Guidance  and State-of-the-Art Facilities
            </p>
           
          </motion.div>
          
         
        </div>
      </main>
    </div>
  );
};

export default ContactMain;