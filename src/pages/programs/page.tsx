import { motion } from 'framer-motion';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

const programs = [
  {
    id: 1,
    title: 'Master of Business Administration',
    category: 'Business',
    duration: '24 months',
    format: 'Online & On-Campus',
    tuition: '$45,000',
    description: 'Develop strategic leadership skills and business acumen to drive organizational success in the global marketplace. Our MBA program combines theoretical knowledge with practical application.',
    startDate: 'September 2025',
    image: 'https://readdy.ai/api/search-image?query=professional%20business%20students%20in%20modern%20conference%20room%20discussing%20strategy%20with%20laptops%20and%20charts%20bright%20natural%20lighting%20contemporary%20office%20setting%20clean%20minimal%20background&width=600&height=800&seq=prog-mba-page&orientation=portrait',
  },
  {
    id: 2,
    title: 'Data Science & Analytics',
    category: 'Technology',
    duration: '18 months',
    format: 'Fully Online',
    tuition: '$38,000',
    description: 'Master cutting-edge data analysis techniques, machine learning, and AI to solve complex business challenges. Learn from industry experts and work on real-world projects.',
    startDate: 'January 2025',
    image: 'https://readdy.ai/api/search-image?query=data%20scientist%20working%20with%20multiple%20monitors%20displaying%20graphs%20and%20analytics%20in%20modern%20tech%20workspace%20bright%20clean%20environment%20minimal%20background%20professional%20setting&width=600&height=800&seq=prog-data-page&orientation=portrait',
  },
  {
    id: 3,
    title: 'Digital Marketing Certificate',
    category: 'Marketing',
    duration: '6 months',
    format: 'Self-Paced',
    tuition: '$8,500',
    description: 'Learn proven digital marketing strategies, SEO, social media, and content marketing to grow your brand online. Perfect for professionals looking to upskill.',
    startDate: 'Rolling Admission',
    image: 'https://readdy.ai/api/search-image?query=creative%20marketing%20team%20brainstorming%20with%20colorful%20sticky%20notes%20and%20digital%20devices%20in%20bright%20modern%20office%20space%20clean%20simple%20background%20collaborative%20atmosphere&width=600&height=800&seq=prog-marketing-page&orientation=portrait',
  },
  {
    id: 4,
    title: 'Healthcare Management',
    category: 'Healthcare',
    duration: '20 months',
    format: 'Hybrid',
    tuition: '$42,000',
    description: 'Prepare for leadership roles in healthcare organizations. Learn healthcare policy, operations management, and strategic planning in the evolving healthcare landscape.',
    startDate: 'March 2025',
    image: 'https://readdy.ai/api/search-image?query=healthcare%20professionals%20in%20modern%20hospital%20setting%20discussing%20patient%20care%20with%20tablets%20and%20medical%20charts%20bright%20clean%20environment%20professional%20atmosphere%20minimal%20background&width=600&height=800&seq=prog-health&orientation=portrait',
  },
  {
    id: 5,
    title: 'Cybersecurity Specialist',
    category: 'Technology',
    duration: '12 months',
    format: 'Online',
    tuition: '$32,000',
    description: 'Become an expert in protecting digital assets and infrastructure. Learn ethical hacking, network security, and risk management from certified professionals.',
    startDate: 'February 2025',
    image: 'https://readdy.ai/api/search-image?query=cybersecurity%20expert%20working%20with%20multiple%20screens%20showing%20security%20dashboards%20and%20code%20in%20dark%20modern%20tech%20office%20professional%20setting%20minimal%20background&width=600&height=800&seq=prog-cyber&orientation=portrait',
  },
  {
    id: 6,
    title: 'Project Management Professional',
    category: 'Business',
    duration: '9 months',
    format: 'Online & On-Campus',
    tuition: '$15,000',
    description: 'Master project management methodologies including Agile, Scrum, and traditional approaches. Prepare for PMP certification while gaining practical experience.',
    startDate: 'April 2025',
    image: 'https://readdy.ai/api/search-image?query=project%20manager%20leading%20team%20meeting%20with%20kanban%20board%20and%20project%20timeline%20in%20modern%20office%20space%20bright%20collaborative%20environment%20minimal%20background&width=600&height=800&seq=prog-pm&orientation=portrait',
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-[#1a3a52]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-coral/20 text-coral text-xs font-semibold rounded-full mb-6"
          >
            ALL PROGRAMS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Transform Your Career
            <br />
            With Expert Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose from our comprehensive range of degree programs, certificates, and professional courses designed to help you achieve your career goals
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-coral/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {program.tuition}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3 line-clamp-2">
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-map-pin-line"></i>
                      {program.format}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <i className="ri-calendar-line"></i>
                      {program.startDate}
                    </span>
                    <a
                      href="#"
                      className="text-coral font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
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

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join thousands of students who have transformed their careers with our programs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="px-8 py-4 bg-coral text-white text-base font-semibold rounded-full hover:bg-coral-dark transition-colors whitespace-nowrap cursor-pointer"
            >
              Apply Now
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-navy text-base font-semibold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Information
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
