
import { motion } from 'framer-motion';

const tools = [
  {
    icon: 'ri-calendar-check-line',
    title: 'Academic Calendar',
    description:
      'Track important dates, deadlines, exam schedules, and enrollment periods all in one place.',
    tag: 'Essential',
    // Tailwind arbitrary value must be wrapped in brackets when used in a string template
    tagColor: 'bg-[bg-coral]/10 text-coral',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Grade Tracker',
    description:
      'Monitor your GPA, track assignment scores, and visualize your academic progress over time.',
    tag: 'Popular',
    tagColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: 'ri-todo-line',
    title: 'Study Planner',
    description:
      'Create custom study schedules, set reminders, and organize your coursework efficiently.',
    tag: 'New',
    tagColor: 'bg-amber-50 text-amber-600',
  },
  {
    icon: 'ri-double-quotes-l',
    title: 'Citation Generator',
    description:
      'Instantly format references in APA, MLA, Chicago, and Harvard citation styles.',
    tag: 'Essential',
    tagColor: 'bg-[bg-coral]/10 text-coral',
  },
  {
    icon: 'ri-calculator-line',
    title: 'Calculator Suite',
    description:
      'Scientific, financial, and statistical calculators built for coursework and exams.',
    tag: 'Utility',
    tagColor: 'bg-sky-50 text-sky-600',
  },
  {
    icon: 'ri-translate-2',
    title: 'Language Lab',
    description:
      'Practice pronunciation, vocabulary, and grammar with AI-powered language exercises.',
    tag: 'Popular',
    tagColor: 'bg-emerald-50 text-emerald-600',
  },
];

export default function StudentTools() {
  return (
    <section className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
            Boost Productivity
          </div>
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Student Tools
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Free digital tools designed to streamline your academic workflow and keep you organized.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-coral/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-navy/5 rounded-xl text-navy text-xl group-hover:bg-coral/10 group-hover:text-coral transition-colors">
                  <i className={tool.icon} />
                </div>
                <span
                  className={`px-3 py-1 text-[10px] font-bold rounded-full ${tool.tagColor}`}
                >
                  {tool.tag}
                </span>
              </div>

              <h4 className="font-bold text-navy text-sm mb-2">
                <a href="#">{tool.title}</a>
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                {tool.description}
              </p>
              <a
                href="#"
                className="text-coral text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                Launch Tool <i className="ri-arrow-right-s-line" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
