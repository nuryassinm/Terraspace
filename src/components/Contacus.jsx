// App.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import  MapContainer  from './MapContainer';
import  ContactForm  from './ContactForm';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[100rem] py-20 w-full mx-auto p-4"
    >
      <h1 className="text-2xl font-bold text-center mb-6">Find us on Google Maps</h1>
      <MapContainer />
      <ContactForm />
    </motion.div>
  );
}
