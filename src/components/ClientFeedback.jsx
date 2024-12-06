// components/ClientFeedback.jsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "PROGRESSION",
    description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET AUCTOR.",
    image: "../assets/woman-training-weightlifting-gym.jpg"
  },
  {
    title: "NUTRITION",
    description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AM AUCTOR.",
    image: "../assets/woman-bicycle.jpg"
  },
  // Add more categories if needed
];

const testimonials = [
  {
    name: "Peter Parker",
    rating: 5.0,
    image: "../assets/prof.png",
    review: "I've Been Using LiftUp For A Few Months Now, And It's Been A Game-Changer For My Workout Routine. The Site Is Packed With Workout Plans, Videos, And Nutrition Guides That Cater To All Fitness Levels. I Especially Appreciate How User-Friendly The Interface Is - It's Easy To Navigate And Visually Motivating."
  },
  {
    name: "Tobey Maguire",
    rating: 5.0,
    image: "../assets/prof1.png",
    review: "The Community Forums And Progress Trackers Are Great Additions, Keeping Me Motivated And Connected. If You're Looking For A Well-Rounded Fitness Website With Tons Of Resources And An Active Community, I'd Highly Recommend Giving This A Try. 10/10"
  }
];

const ClientFeedback = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full text-white py-16">
      {/* Categories Section */}
      <div className="max-w-[110rem] mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden h-[400px] group"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/60 transition-colors">
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-[#DADADA]">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-2 mt-8">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === activeSlide ? 'w-8 bg-[#FF7907]' : 'w-2 bg-white/30'
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white text-[#222222] rounded-2xl p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FF7907] text-[#FF7907]"
                  />
                ))}
                <span className="ml-2 font-semibold">{testimonial.rating}</span>
              </div>
              
              <p className="mb-8 text-lg">{testimonial.review}</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <h4 className="font-semibold">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;