// ContactSection.jsx
import { motion } from "framer-motion";
import { HelpCircle, UserPlus, FileText } from "lucide-react";

const ContactSection = () => {
  const processes = [
    {
      icon: <HelpCircle className="w-12 h-12 text-pink-400" />,
      title: "RESORT TO A PROCESS",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <UserPlus className="w-12 h-12 text-blue-400" />,
      title: "CASE REOPENING",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-400" />,
      title: "JUDICIAL FOLLOW-UP",
      description: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0),linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0)] bg-[length:40px_40px] bg-[position:0_0,20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-[3rem] font-serif mb-6">
            CONTACT US TO BETTER
            <br />
            UNDERSTAND YOUR CASE
          </h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{process.icon}</div>
              <h3 className="text-xl font-serif mb-3">{process.title}</h3>
              <p className="text-gray-600 px-16">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactSection;