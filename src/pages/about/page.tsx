import { motion } from 'framer-motion';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

const stats = [
  { number: '50,000+', label: 'Students Enrolled' },
  { number: '200+', label: 'Expert Instructors' },
  { number: '95%', label: 'Success Rate' },
  { number: '150+', label: 'Countries Reached' },
];

const values = [
  {
    icon: 'ri-lightbulb-line',
    title: 'Innovation',
    description: 'We constantly evolve our curriculum to stay ahead of industry trends and provide cutting-edge education.',
  },
  {
    icon: 'ri-team-line',
    title: 'Community',
    description: 'Building a supportive global network of learners, educators, and industry professionals.',
  },
  {
    icon: 'ri-award-line',
    title: 'Excellence',
    description: 'Committed to delivering the highest quality education and student experience.',
  },
  {
    icon: 'ri-global-line',
    title: 'Accessibility',
    description: 'Making world-class education accessible to everyone, everywhere.',
  },
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'President & CEO',
    image: 'https://readdy.ai/api/search-image?query=professional%20asian%20female%20executive%20in%20business%20suit%20smiling%20confidently%20in%20modern%20office%20bright%20natural%20lighting%20minimal%20background%20corporate%20portrait&width=400&height=500&seq=team-sarah&orientation=portrait',
  },
  {
    name: 'Prof. Michael Zhang',
    role: 'Chief Academic Officer',
    image: 'https://readdy.ai/api/search-image?query=distinguished%20male%20professor%20in%20smart%20casual%20attire%20with%20warm%20smile%20in%20academic%20setting%20bright%20professional%20lighting%20minimal%20background&width=400&height=500&seq=team-michael&orientation=portrait',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Director of Student Success',
    image: 'https://readdy.ai/api/search-image?query=friendly%20female%20professional%20in%20modern%20business%20attire%20smiling%20warmly%20in%20contemporary%20office%20bright%20natural%20lighting%20minimal%20background&width=400&height=500&seq=team-emma&orientation=portrait',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Dean of Technology',
    image: 'https://readdy.ai/api/search-image?query=confident%20male%20tech%20leader%20in%20casual%20professional%20attire%20in%20modern%20tech%20workspace%20bright%20clean%20environment%20minimal%20background&width=400&height=500&seq=team-james&orientation=portrait',
  },
];

export default function About() {
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
            ABOUT US
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Empowering Learners
            <br />
            Around The World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Since 2010, we've been dedicated to providing world-class education that transforms lives and careers
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-coral mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                At EduVerse Academy, we believe that education is the key to unlocking human potential. Our mission is to provide accessible, high-quality education that empowers individuals to achieve their dreams and make a positive impact on the world.
              </p>
              <p className="text-gray-600 text-lg">
                We combine cutting-edge technology with proven pedagogical methods to create engaging learning experiences that prepare students for success in the rapidly evolving global marketplace.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20students%20collaborating%20on%20project%20in%20modern%20bright%20classroom%20with%20laptops%20and%20books%20inspiring%20educational%20atmosphere%20minimal%20background&width=800&height=1000&seq=about-mission&orientation=portrait"
                alt="Our Mission"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-[#F8F7F5] rounded-3xl"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-coral/10 text-coral rounded-full mx-auto mb-4">
                  <i className={`${value.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4"
            >
              Meet Our Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Experienced educators and industry leaders dedicated to your success
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                  <p className="text-coral text-sm font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
