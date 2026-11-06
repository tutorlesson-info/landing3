
import { motion } from 'framer-motion';

const services = [
  {
    icon: 'ri-file-user-line',
    title: 'Resume & Portfolio Review',
    description:
      'Get personalized feedback from industry professionals on your resume, CV, and portfolio to stand out in competitive job markets.',
    image:
      'https://readdy.ai/api/search-image?query=professional%20resume%20document%20on%20a%20clean%20desk%20with%20a%20pen%20and%20glasses%20warm%20soft%20lighting%20minimalist%20composition%20cream%20and%20white%20tones%20career%20preparation%20concept&width=500&height=350&seq=career-1&orientation=landscape',
  },
  {
    icon: 'ri-user-voice-line',
    title: 'Interview Preparation',
    description:
      'Practice with mock interviews, receive coaching on body language, and learn strategies to confidently answer tough questions.',
    image:
      'https://readdy.ai/api/search-image?query=two%20professionals%20having%20a%20friendly%20conversation%20across%20a%20table%20in%20a%20bright%20modern%20office%20warm%20natural%20light%20clean%20minimal%20interior%20neutral%20tones%20interview%20coaching%20concept&width=500&height=350&seq=career-2&orientation=landscape',
  },
  {
    icon: 'ri-briefcase-line',
    title: 'Job Placement Assistance',
    description:
      'Access exclusive job boards, employer partnerships, and placement support with a 92% employment rate within 6 months.',
    image:
      'https://readdy.ai/api/search-image?query=person%20shaking%20hands%20in%20a%20professional%20setting%20bright%20modern%20office%20lobby%20warm%20ambient%20lighting%20clean%20minimal%20background%20career%20success%20concept%20neutral%20warm%20tones&width=500&height=350&seq=career-3&orientation=landscape',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Career Path Planning',
    description:
      'Work one-on-one with career advisors to map your professional trajectory, identify skill gaps, and set achievable milestones.',
    image:
      'https://readdy.ai/api/search-image?query=person%20looking%20at%20a%20roadmap%20diagram%20on%20a%20whiteboard%20in%20a%20bright%20modern%20office%20warm%20natural%20light%20clean%20minimal%20interior%20career%20planning%20concept%20neutral%20tones&width=500&height=350&seq=career-4&orientation=landscape',
  },
];

export default function CareerServices() {
  return (
    <section id="career-services" className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
              Launch Your Career
            </div>
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">
              Career Services
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              From your first resume draft to your dream job offer, our dedicated
              career team walks with you every step of the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-coral">92%</div>
              <div className="text-xs text-gray-500 mt-1">Placement Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-coral">500+</div>
              <div className="text-xs text-gray-500 mt-1">Partner Companies</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-coral">3 Mo</div>
              <div className="text-xs text-gray-500 mt-1">Avg. Time to Hire</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-coral/30 transition-all cursor-pointer"
            >
              <div className="relative w-full h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  title={`${service.title} - EduVerse Academy Career Services`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a placeholder if the image fails to load
                    e.currentTarget.src =
                      'https://via.placeholder.com/500x350?text=Image+Unavailable';
                  }}
                />
                <div className="absolute bottom-3 left-3 w-10 h-10 flex items-center justify-center bg-white rounded-xl text-coral text-lg">
                  <i className={service.icon}></i>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-navy text-sm mb-2">
                  <a href="#">{service.title}</a>
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
