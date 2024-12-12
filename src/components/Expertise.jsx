// App.jsx
import { motion } from "framer-motion";
import { Scale, Building2, Briefcase, Book, Heart, Brain, Gavel, Users } from 'lucide-react';

const fields = [
  {
    title: "Antimonopoly Compliance",
    experts: "2 Lawyers",
    icon: <Scale className="w-6 h-6" />
  },
  {
    title: "Employment Law",
    experts: "4 Experts",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Public Procurement Law",
    experts: "3 Lawyers",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Medical Law",
    experts: "5 Experts",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Criminal Law",
    experts: "7 Lawyers",
    icon: <Gavel className="w-6 h-6" />
  },
  {
    title: "Building and Architect Law",
    experts: "4 Experts",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Intellectual Property",
    experts: "2 Experts",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Family & Inheritance Law",
    experts: "4 Experts",
    icon: <Book className="w-6 h-6" />
  },
];

const Expertise = () => {
  return (
    <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-navy-900 min-h-screen "
        >
          <div className=" mx-auto py-16">
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20  bg-[#0B1120] text-white p-10">
          {/* Images Section */}
          <div className="flex md:flex-row  flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-200 h-[500px] w-full rounded-lg animate-pulse"
            >
              <img
                src="../assets/still-life-with-scales-justice (1).jpg"
                alt="Lady Justice"
                className="h-full w-full object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-200 h-[500px] w-full rounded-lg animate-pulse"
            >
              <img
                src="../assets/national-museum-history-romania.jpg"
                alt="Court Building"
                className="h-full w-full object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <div className="flex gap-3">
            <h2 className="text-6xl font-serif text-[#D4AF37]">H</h2>
            <p className="text-lg leading-relaxed">
              Nulla venenatis elementum arcu lobortis a viverra mi sed blandit. Ut nunc
              venenatis ridiculus cum cursus adipiscing velit aliquam quisque. Amet vita
            </p>
            </div>
            <p className="text-lg leading-relaxed">
              Neque sapien nibh aliquet leo tellus sed consectetur mauris sodales. Vitae
              tortor rutrum aliquet tellus semper cursus pulvinar. Nibh quis eu et mauris nunc eu odio.
            </p>
            <p className="text-lg leading-relaxed">
              Faucibus mi amet aliquet lacinia adipiscing. Eget imperdiet gravida vitae nunc tellus
              mattis eget pretium. Faucibus vitae sagittis elit vitae cursus gravida erat nulla sit.
              Vestibulum eu pellentesque varius lobortis enim massa quis.
            </p>
            <div>
              <p className="font-signature text-xl italic">Anne Hardin</p>
            </div>
          </div>
        </div>

        {/* Fields of Expertise Section */}
      <section className="flex justify-center w-full">
        <div className="max-w-[95rem] w-full">
        <div className="text-center  w-full mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl text-[#0A2042] font-medium mb-4"
          >
            Fields Of Expertise -
          </motion.h2>
          <p className="text-[#0A2042]">Vision Makes Us Who We Are</p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#0A2042]">
          {fields.map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                {field.icon}
                <div>
                  <h3 className="text-xl font-semibold">{field.title}</h3>
                  <p className="text-gray-600">{field.experts}</p>
                </div>
              </div>
              <button className=" hover:text-gray-400 text-[#0A2042] transition-colors">
                LEARN MORE →
              </button>
            </motion.div>
          ))}
        </div>
        </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Expertise;