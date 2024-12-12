// FAQSection.jsx
import { motion } from "framer-motion";
const faqs = [
  {
    question: "What types of cases does your law firm handle?",
    answer: "Ut quis molestie ipsum, non imperdiet est. Praesent sollicitudin, enim vel laoreet congue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum."
  },
  {
    question: "What should I expect during an initial consultation?",
    answer: "Ut quis molestie ipsum, non imperdiet est. Praesent sollicitudin, enim vel laoreet congue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum."
  },
  {
    question: "How can I schedule a consultation with one of your attorneys?",
    answer: "Ut quis molestie ipsum, non imperdiet est. Praesent sollicitudin, enim vel laoreet congue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum."
  },
  {
    question: "What types of cases does your law firm handle?",
    answer: "Ut quis molestie ipsum, non imperdiet est. Praesent sollicitudin, enim vel laoreet congue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum."
  },
  {
    question: "What should I expect during an initial consultation?",
    answer: "Ut quis molestie ipsum, non imperdiet est. Praesent sollicitudin, enim vel laoreet congue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum."
  },
  {
    question: "How can I schedule a consultation with one of your attorneys?",
    answer: "Ut quis molestie ipsum, non imperdiet est. Praesent sollicitudin, enim vel laoreet congue, enim lorem ullamcorper risus, sed vestibulum ante quam ac mauris. Morbi in turpis leo. Nunc rhoncus viverra dictum."
  },
  // Add more FAQs as needed
];

const FAQSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-[3.5rem] font-bold mb-12 text-center"
        >
          <span className="text-navy-900">Frequently Asked </span>
          <span className="text-amber-500">Questions</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-md"
            >
              <div className="flex gap-4">
                <span className="text-amber-500 text-2xl font-bold">?</span>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQSection;