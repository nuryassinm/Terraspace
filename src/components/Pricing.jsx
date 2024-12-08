// App.jsx
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter Package",
    text:"lorem ipsum hhnbb mnbnmb jhbbjbn jjknbm, ",
    price: "10.99",
    features: [
      "Ideal for beginners or those seeking a flexible commitment",
      "Access to basic gym facilities and equipment",
      "Limited group classes included",
    ],
    recommended: false,
  },
  {
    name: "Pro Package",
    text:"lorem ipsum hhnbb mnbnmb jhbbjbn jjknbm, ",
    price: "14.00",
    features: [
      "Perfect for dedicated fitness enthusiasts",
      "Full access to all gym facilities, equipment, and group classes",
      "Personalized training session included",
    ],
    recommended: true,
  },
  {
    name: "Elite Package",
    text:"lorem ipsum hhnbb mnbnmb jhbbjbn jjknbm, ",
    price: "29.99",
    features: [
      "Designed for committed to peak performance",
      "Ideal for beginners or those seeking a flexible commitment",
      "Limited group classes included",
    ],
    recommended: false,
  },
];

const testimonials = [
  {
    name: "John Smith",
    image: "https://via.placeholder.com/50",
    text: "The gym has been incredible for my fitness journey. The trainers are knowledgeable and supportive.",
  },
  {
    name: "Sarah Johnson",
    image: "https://via.placeholder.com/50",
    text: "I've been a member for over a year now, and I can confidently say it's been a game-changer in my fitness routine.",
  },
  {
    name: "John Smith",
    image: "https://via.placeholder.com/50",
    text: "The gym has been incredible for my fitness journey. The trainers are knowledgeable and supportive.",
  },
  {
    name: "Sarah Johnson",
    image: "https://via.placeholder.com/50",
    text: "I've been a member for over a year now, and I can confidently say it's been a game-changer in my fitness routine.",
  },
  {
    name: "Sarah Johnson",
    image: "https://via.placeholder.com/50",
    text: "I've been a member for over a year now, and I can confidently say it's been a game-changer in my fitness routine.",
  },
  {
    name: "John Smith",
    image: "https://via.placeholder.com/50",
    text: "The gym has been incredible for my fitness journey. The trainers are knowledgeable and supportive.",
  },
  {
    name: "Sarah Johnson",
    image: "https://via.placeholder.com/50",
    text: "I've been a member for over a year now, and I can confidently say it's been a game-changer in my fitness routine.",
  },
  {
    name: "Sarah Johnson",
    image: "https://via.placeholder.com/50",
    text: "I've been a member for over a year now, and I can confidently say it's been a game-changer in my fitness routine.",
  },
  {
    name: "John Smith",
    image: "https://via.placeholder.com/50",
    text: "The gym has been incredible for my fitness journey. The trainers are knowledgeable and supportive.",
  },
  {
    name: "Sarah Johnson",
    image: "https://via.placeholder.com/50",
    text: "I've been a member for over a year now, and I can confidently say it's been a game-changer in my fitness routine.",
  },
  {
    name: "Sarah Johnson",
    image: "https://via.placeholder.com/50",
    text: "I've been a member for over a year now, and I can confidently say it's been a game-changer in my fitness routine.",
  },
  {
    name: "John Smith",
    image: "https://via.placeholder.com/50",
    text: "The gym has been incredible for my fitness journey. The trainers are knowledgeable and supportive.",
  },
  
  // Add more testimonials as needed
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#EFEEE] flex flex-col font-raleway">
      <div className=" mx-auto px-4 py-16 justify-center w-full  flex ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[100rem] w-full"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1B1F13] mb-4">
              Choose Your Path OF Fitness
            </h1>
            <p className="text-gray-600">
              Discover the Perfect Membership Option to Fit Your Lifestyle and Goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg p-8 shadow-lg relative"
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-[#FD0235] text-white py-2 rounded-t-lg">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 mt-2 text-[#FD0235]">{plan.name}</h3>
                <p className="max-w-[15rem]">{plan.text}</p>
                <div className="text-3xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-sm font-normal">/month</span>
                </div>
                <button className={`w-full py-2 rounded-lg mb-6 ${plan.recommended ? 'bg-[#FD0235] text-white' : 'border border-[#FD0235] text-[#FD0235]'}`}>
                  Upgrade to Pro
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="text-[#FD0235] w-5 h-5 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-32 bg-[#161213] p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#FFFFFF] mb-4">
              Hear What Our Community <br /> Has to Say "
            </h2>
            <p className="text-gray-600">
              Discover Real Stories of Transformation, Inspiration, and Success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-[#1B1B1B] rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center text-white gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600white text-white">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
     
    </div>
  );
}