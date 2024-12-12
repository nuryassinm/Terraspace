// components/Careers/InternshipSection.jsx
const InternshipSection = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-[95rem] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-md text-gray-600 mb-2 block">
              Join The Team
            </span>
            <h2 className="text-5xl font-semibold md:text-4xl font-serif text-navy-900 mb-4">
              APPLying{' '}
              <span className="text-gold-600">For Intern</span><br />
              SHIP
            </h2>
            
            <p className="text-gray-400 text-md mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-navy-900 font-bold text-lg mb-2">
                  Read more about company
                </h3>
                <button className="text-gold-600 hover:text-gold-700">
                  LEARN MORE →
                </button>
              </div>
              
              <div>
                <h3 className="text-navy-900 font-bold text-lg mb-2">
                  Applying position and join our team
                </h3>
                <button className="text-gold-600 hover:text-gold-700">
                  APPLY →
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gold-600 text-white px-6 py-3 rounded-md hover:bg-gold-700 transition-colors">
                Practicing Area
              </button>
              <button className="border border-navy-900 text-navy-900 px-6 py-3 rounded-md hover:bg-navy-900 hover:text-white transition-colors">
                Book an appointment
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="../assets/smiling-corporate-business-people.jpg"
              alt="Justice scales"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;