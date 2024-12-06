// Footer.jsx
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    about: {
      title: "ABOUT",
      links: ["Company", "Blog", "Why Us", "Partnership"]
    },
    help: {
      title: "HELP",
      links: ["Account", "Support", "Privacy", "Terms & Conditions"]
    },
    address: {
      title: "ADDRESS",
      links: ["Near Sagar", "Hyderabad", "India"]
    }
  };

  const FooterColumn = ({ title, links }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 md:mt-0"
    >
      <h3 className="text-white font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-[#DADADA] hover:text-[#FF7907] transition-colors duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <footer className="bg-[#222222] w-full py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white text-2xl font-bold mb-4">LiftUp</h2>
            <p className="text-[#DADADA] mb-4">Follow Us</p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#FF7907] p-2 rounded-full"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#FF7907] p-2 rounded-full"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Other Columns */}
          {Object.entries(footerSections).map(([key, { title, links }]) => (
            <FooterColumn key={key} title={title} links={links} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;