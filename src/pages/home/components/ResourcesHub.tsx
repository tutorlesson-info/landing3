import { motion } from 'framer-motion';

const resources = [
  {
    id: 1,
    title: 'Resource Library',
    description: 'Access 1,000+ guides, templates, and tools',
    icon: 'ri-book-open-line',
    link: '#',
  },
  {
    id: 2,
    title: 'Academic Calendar',
    description: 'View important dates and deadlines',
    icon: 'ri-calendar-line',
    link: '#',
  },
  {
    id: 3,
    title: 'Student Support',
    description: '24/7 assistance available',
    icon: 'ri-customer-service-2-line',
    link: '#',
  },
];

const careerServices = [
  'Resume & Portfolio Review',
  'Interview Preparation',
  'Job Placement Assistance',
];

export default function ResourcesHub() {
  return (
    <section className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-navy uppercase tracking-wider mb-4"
          >
            LEARNING RESOURCES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-serif font-bold text-navy"
          >
            Everything You Need
            <br />
            To Succeed
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:row-span-2 bg-gradient-to-br from-navy to-navy-dark rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="h-64 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=digital%20library%20interface%20with%20books%20and%20documents%20floating%20in%20modern%20minimalist%20space%20soft%20lighting%20clean%20background%20educational%20technology%20concept&width=600&height=500&seq=resource-library&orientation=landscape"
                alt="Resource Library"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 text-white">
              <h3 className="text-3xl font-serif font-bold mb-3">Resource Library</h3>
              <p className="text-gray-300 mb-6">
                Access 1,000+ guides, templates, and tools to support your learning journey
              </p>
              <button className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-navy transition-all whitespace-nowrap">
                Browse Library
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-coral/10 rounded-3xl p-8 hover:shadow-xl transition-all group cursor-pointer"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex items-center justify-center bg-coral text-white rounded-2xl text-3xl flex-shrink-0">
                <i className="ri-calendar-line"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-navy mb-2">Academic Calendar</h3>
                <p className="text-gray-600 mb-4">
                  View important dates and deadlines for all programs and courses
                </p>
                <a
                  href="#"
                  className="text-coral font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Calendar
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=friendly%20student%20support%20advisor%20helping%20student%20with%20laptop%20in%20bright%20modern%20office%20space%20clean%20minimal%20background%20professional%20caring%20atmosphere&width=600&height=400&seq=student-support&orientation=landscape"
                alt="Student Support"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">Student Support</h3>
              <p className="text-sm text-gray-600">24/7 assistance available</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-coral/10 to-orange-50 rounded-3xl p-8 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-navy text-white rounded-xl text-2xl mb-4">
              <i className="ri-briefcase-line"></i>
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Career Services</h3>
            <ul className="space-y-3">
              {careerServices.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="ri-check-line text-coral text-lg"></i>
                  {service}
                </li>
              ))}
            </ul>
            <a href="#" className="text-coral font-semibold text-sm mt-4 inline-block hover:underline">
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
