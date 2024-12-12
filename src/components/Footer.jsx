// Footer.jsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    hawaiiOffice: {
      title: "Hawaii Main Office",
      details: [
        { icon: <Phone className="w-4 h-4" />, text: "T: 383 (21) 23 43984" },
        { icon: <Phone className="w-4 h-4" />, text: "M: 607 683 8156" },
        { icon: <MapPin className="w-4 h-4" />, text: "A: 828 Timbercrest Road," },
        { text: "Healy City, AK 99743" },
        { icon: <Mail className="w-4 h-4" />, text: "E: info.us@wiselaw.com" },
      ]
    },
    worldOffices: {
      title: "World Offices",
      locations: [
        "US - Hawaii",
        "US - San Francisco",
        "UK - London",
        "EU - Zurich",
        "UAE - Abu Dhabi"
      ]
    },
    expertise: {
      title: "Expertise",
      areas: [
        "Automotive Industry",
        "Cannabis Law",
        "Construction & Real Estate",
        "Media & Insurance Law",
        "Technology & Data"
      ]
    },
    faq: {
      title: "FAQ",
      questions: [
        "How Do I Choose a Lawyer?",
        "What is Domestic Violence",
        "How is child custody determined?",
        "Do I need a personal Lawyer?"
      ]
    }
  };

  return (
    <footer className="bg-[#1c314e] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="text-3xl font-bold flex items-center gap-2">
            <span className="text-4xl font-raleway">W</span>
            <span>WISELAW</span>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hawaii Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">{footerSections.hawaiiOffice.title}</h3>
            <div className="space-y-2">
              {footerSections.hawaiiOffice.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  {detail.icon}
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* World Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">{footerSections.worldOffices.title}</h3>
            <ul className="space-y-2">
              {footerSections.worldOffices.locations.map((location, index) => (
                <li key={index} className="text-gray-300">{location}</li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">{footerSections.expertise.title}</h3>
            <ul className="space-y-2">
              {footerSections.expertise.areas.map((area, index) => (
                <li key={index} className="text-gray-300">{area}</li>
              ))}
            </ul>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">{footerSections.faq.title}</h3>
            <ul className="space-y-2">
              {footerSections.faq.questions.map((question, index) => (
                <li key={index} className="text-gray-300">{question}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;