// TestimonialsSection.jsx
import { motion } from "framer-motion";
const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      author: "Jaline Hardman",
      role: "Customer",
      avatar: "/path-to-avatar1.jpg"
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      author: "Richard Messick",
      role: "Customer",
      avatar: "/path-to-avatar2.jpg"
    }
  ];

  return (
    <div className="max-w-[110rem] mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[4rem] font-serif mb-6">
            WHAT PEOPLE
            <br />
            SAY ABOUT OUR
            <br />
            FIRM
          </h2>
          <p className="text-gray-500 text-xl">
            Pellentesque massa placerat duis ultricies lacus <br /> 
            sed turpis. Imperdier proin fermentum leo vel <br />
            orci porta non. Etiam dignissim diam quis enim <br />
             lobortis scelerisque fermentum dui.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-700 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500 rounded-full opacity-20"></div>
          
          <div className="space-y-6 relative z-10 md:flex-row flex-col gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white  p-6 rounded-lg shadow-lg"
              >
                <div className="text-emerald-700 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-orange-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection ;