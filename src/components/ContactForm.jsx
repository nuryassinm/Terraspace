
// components/ContactForm.jsx
import { motion } from 'framer-motion';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Send us a message</h2>
      <p className="text-center text-gray-600 mb-8">
        Fill out the form and our team will get back to you as quickly as we can
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-2 border rounded-md"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="mb-2">E-mail</label>
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="p-2 border rounded-md"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="mb-2">Subject</label>
            <input
              type="text"
              placeholder="Your Subject"
              className="p-2 border rounded-md"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col"
          >
            <label className="mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="p-2 border rounded-md"
            />
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mb-6"
        >
          <label className="mb-2 block">Message</label>
          <textarea
            placeholder="Write Your message here"
            rows="4"
            className="w-full p-2 border rounded-md"
          ></textarea>
        </motion.div>

        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" id="terms" className="rounded" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to Terms of Service and Privacy Policy*
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}