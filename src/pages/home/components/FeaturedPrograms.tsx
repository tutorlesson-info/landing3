import { motion } from 'framer-motion';

const programs = [
  {
    id: 1,
    title: 'Master of Business Administration',
    category: 'Business',
    duration: '24 months',
    format: 'Online & On-Campus',
    description: 'Develop strategic leadership skills and business acumen to drive organizational success in the global marketplace.',
    startDate: 'September 2025',
    image: 'https://readdy.ai/api/search-image?query=professional%20business%20students%20in%20modern%20conference%20room%20discussing%20strategy%20with%20laptops%20and%20charts%20bright%20natural%20lighting%20contemporary%20office%20setting%20clean%20minimal%20background&width=600&height=800&seq=prog-mba&orientation=portrait',
  },
  {
    id: 2,
    title: 'Data Science & Analytics',
    category: 'Technology',
    duration: '18 months',
    format: 'Fully Online',
    description: 'Master cutting-edge data analysis techniques, machine learning, and AI to solve complex business challenges.',
    startDate: 'January 2025',
    image: 'https://readdy.ai/api/search-image?query=data%20scientist%20working%20with%20multiple%20monitors%20displaying%20graphs%20and%20analytics%20in%20modern%20tech%20workspace%20bright%20clean%20environment%20minimal%20background%20professional%20setting&width=600&height=800&seq=prog-data&orientation=portrait',
  },
  {
    id: 3,
    title: 'Digital Marketing Certificate',
    category: 'Marketing',
    duration: '6 months',
    format: 'Self-Paced',
    description: 'Learn proven digital marketing strategies, SEO, social media, and content marketing to grow your brand online.',
    startDate: 'Rolling Admission',
    image: 'https://readdy.ai/api/search-image?query=creative%20marketing%20team%20brainstorming%20with%20colorful%20sticky%20notes%20and%20digital%20devices%20in%20bright%20modern%20office%20space%20clean%20simple%20background%20collaborative%20atmosphere&width=600&height=800&seq=prog-marketing&orientation=portrait',
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-coral/10 text-coral text-xs font-semibold rounded-full mb-4"
          >
            FEATURED PROGRAMS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-navy mb-4"
          >
            Discover Programs That
            <br />
            Match Your Ambitions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Choose from our carefully curated programs designed to help you achieve your career goals
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" data-product-shop>
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-navy/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {program.category}
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-navy mb-3 truncate text-left">
                  {program.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 text-left">
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-map-pin-line"></i>
                    {program.format}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 text-left min-h-[60px]">
                  {program.description}
                </p>
                <div className="flex items-start justify-between text-left">
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <i className="ri-calendar-line"></i>
                    {program.startDate}
                  </span>
                  <a
                    href="#"
                    className="text-coral font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer whitespace-nowrap"
                  >
                    Learn More
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
