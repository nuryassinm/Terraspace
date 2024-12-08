// Footer.jsx
import { Twitter, Linkedin, Github, Facebook, Instagram, Dribbble } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Overview', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Solutions', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Pricing', href: '#' },
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#', badge: 'New' },
        { name: 'News', href: '#' },
      ]
    },
    social: {
      title: 'Social',
      links: [
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'Dribbble', href: '#' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Terms', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Cookies', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    }
  };

  const socialIcons = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Github size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Dribbble size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-[#1B1F13] w-full text-white px-6 py-12">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FD0235] text-2xl font-bold">Muscle</span>
            </div>
            <p className="text-gray-400 text-sm">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* Footer Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white text-sm flex items-center"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="ml-2 bg-[#FD0235] text-white text-xs px-2 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Muscle. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;