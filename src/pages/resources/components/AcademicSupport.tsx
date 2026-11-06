
import { motion } from 'framer-motion';

const supportItems = [
  {
    icon: 'ri-team-line',
    title: 'One-on-One Tutoring',
    description:
      'Book sessions with subject-matter experts for personalized academic guidance.',
    color: 'bg-coral/10 text-coral',
    borderColor: 'border-l-coral',
  },
  {
    icon: 'ri-edit-line',
    title: 'Writing Center',
    description:
      'Get feedback on essays, research papers, and dissertations from experienced editors.',
    color: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-l-emerald-500',
  },
  {
    icon: 'ri-group-line',
    title: 'Study Groups',
    description:
      'Join or create peer study groups organized by course, topic, or exam preparation.',
    color: 'bg-amber-50 text-amber-600',
    borderColor: 'border-l-amber-500',
  },
  {
    icon: 'ri-presentation-line',
    title: 'Workshops & Seminars',
    description:
      'Attend weekly skill‑building workshops on time management, research methods, and more.',
    color: 'bg-sky-50 text-sky-600',
    borderColor: 'border-l-sky-500',
  },
];

export default function AcademicSupport() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">We&apos;re Here to Help</div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-4">
                Academic Support
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Struggling with a concept or need extra guidance? Our academic
                support services are designed to help you overcome challenges
                and reach your full potential.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-dark transition-all cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-line"></i>
                Schedule a Session
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 relative w-full h-56 rounded-2xl overflow-hidden"
            >
              <img
                src="https://readdy.ai/api/search-image?query=student%20and%20tutor%20working%20together%20at%20a%20desk%20with%20books%20and%20laptop%20bright%20modern%20library%20setting%20warm%20natural%20light%20clean%20minimal%20background%20academic%20mentoring%20concept%20neutral%20warm%20tones&width=600&height=350&seq=acad-support-main&orientation=landscape"
                alt="Academic Support at EduVerse"
                title="Academic Support - EduVerse Academy"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
            {supportItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-[#FAFAF8] rounded-2xl p-6 border-l-4 ${item.borderColor} hover:bg-white transition-all cursor-pointer`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg mb-4 ${item.color}`}
                >
                  <i className={item.icon}></i>
                </div>
                <h4 className="font-bold text-navy text-sm mb-2">
                  <a href="#">{item.title}</a>
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
