// ServiceSection.jsx
import { motion } from "framer-motion";
import { Scale, Building2 } from "lucide-react";
import { useState } from "react";

const ServiceSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const services = [
    {
      icon: <Scale className="w-8 h-8 text-blue-400" />,
      title: "CORPORATE LAWYER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-pink-400" />,
      title: "CRIMINAL LAWYER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="max-w-[110rem] w-full mx-auto px-4">
      {/* Service Cards */}
      <div className="relative">
        <div className="absolute -top-20 left-0 w-32 h-32 bg-emerald-700 rounded-full opacity-20"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-emerald-700 flex items-center hover:text-emerald-800">
                Read More
                <span className="ml-2">→</span>
              </button>
            </motion.div>
          ))}
        </div>
        <div className="absolute -bottom-10 right-0 w-40 h-40 bg-orange-500 rounded-full opacity-20"></div>
      </div>

      {/* Claim Section */}
      <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="text-[3rem] font-serif mb-6">
            DON'T BE AN
            <br />
            UNSOLVED CASE
            <br />
            CLAIM YOUR LIFE
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-gray-600 mb-8">
            Iaculis nunc sed augue lacus viverra vitae congue eu. Aliquam sem
            fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio
            morbi quis commodo odio. Est velit egestas dui id ornare arcu odio ut
            sem.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors">
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {!imageLoaded && (
            <div className="w-full h-[500px] bg-gray-200 rounded-full animate-pulse"></div>
          )}
          <div className="relative  w-[500px] h-[500px] rounded-full bg-emerald-700 ">
            <img
              src="../assets/portrait-young-girl-gray-t-shirt-purple-wall.png"
              alt="Professional"
              className={`w-full h-full object-cover relative  -right-10 transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;