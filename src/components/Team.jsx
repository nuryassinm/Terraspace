// components/LegalTeam/TeamOverview.jsx
const services = [
  { name: 'General Legal Advice', icon: '⚡' },
  { name: 'Contract Review', icon: '📄' },
  { name: 'Litigation', icon: '⚖️' },
  { name: 'Family Law', icon: '👨‍👩‍👧‍👦' },
];

const TeamOverview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[95rem] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Left Image */}
          <div className="relative">
            <img
              src="../assets/smiling-corporate-business-people.jpg"
              alt="Legal team meeting"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semi-bold font-serif text-navy-900 mb-4">
              Our Legal Team Is{' '}
              <span className="text-gold-600 font-semi-bold">Highly Skilled</span>{' '}
              And Well-Versed
            </h2>
            
            <p className="text-gray-400 text-lg  mb-8">
              Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronics.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {services.map((service) => (
                <div key={service.name} className="flex items-center gap-3">
                  <span className="text-gold-600">{service.icon}</span>
                  <span className="text-navy-900">{service.name}</span>
                </div>
              ))}
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
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;