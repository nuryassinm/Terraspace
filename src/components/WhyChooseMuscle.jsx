// WhyChooseMuscle.jsx
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What are the membership options available at Muscle Gym?",
    answer: "The option provides full access to our gym facilities during regular operating hours. It's perfect for those who prefer to work out independently. Advanced memberships include additional premium features such as access to exclusive classes, priority booking for personal training sessions, and discounts on select services."
  },
  {
    question: "What measures does Muscle Gym take to ensure cleanliness and hygiene?",
    answer: "We maintain strict cleaning protocols throughout our facility..."
  },
  {
    question: "What group fitness classes does Muscle Gym offer, and how do I sign up?",
    answer: "We offer a variety of group fitness classes including..."
  },
  {
    question: "What facilities and equipment does Muscle Gym offer?",
    answer: "Our gym is equipped with state-of-the-art equipment..."
  },
  {
    question: "Can I bring a guest with me to Muscle Gym?",
    answer: "Yes, we have a guest policy that allows members..."
  },
  {
    question: "Are personal training sessions available, and how do I schedule them?",
    answer: "Personal training sessions are available with our certified trainers..."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div 
    className="border-b border-gray-200 py-4"
    initial={false}
  >
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={onClick}
    >
      <span className="font-medium text-xl text-gray-900">{question}</span>
      <ChevronDown
        className={`w-5 h-5 text-gray-500 transition-transform ${
          isOpen ? "transform rotate-180" : ""
        }`}
      />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {isOpen && (
        <p className="mt-4 text-gray-600 text-md font-medium">
          {answer}
        </p>
      )}
    </motion.div>
  </motion.div>
);

const WhyChooseMuscle = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="py-16 px-4 w-full">
      <div className="max-w-[102rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4">Why choose Muscle ?</h2>
          <p className="text-gray-600 mb-8">
            With our advanced features, we bring the power of data analysis right to your fingertips.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#FD0235] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              JOIN US NOW
            </button>
            <button className="border border-[#FD0235] text-[#FD0235] px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <img
            src="../assets/young-fitness-man-studio.jpg" // Replace with your actual image path
            alt="Gym Equipment"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=""
        >
          <h3 className="text-2xl font-bold text-center mb-2">
            Answers to Your Questions
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Common Inquiries about Muscle Gym Membership, Facilities, and Services
          </p>
          
          <div className="max-w-7xl  mx-auto">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseMuscle;