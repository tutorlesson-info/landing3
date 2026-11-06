
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I access the Resource Library?',
    answer: 'All enrolled students can access the Resource Library through the Student Portal. Simply log in with your credentials and navigate to the Resources tab. You can browse, search, and download materials instantly.',
  },
  {
    question: 'Are career services available to alumni?',
    answer: 'Yes! Career services are available to all current students and alumni for up to 2 years after graduation. Alumni can access resume reviews, job boards, and networking events at no additional cost.',
  },
  {
    question: 'How do I book a tutoring session?',
    answer: 'You can book one-on-one tutoring sessions through the Academic Support section of the Student Portal. Choose your subject, preferred tutor, and available time slot. Sessions are available both in-person and online.',
  },
  {
    question: 'Can I suggest new resources or tools?',
    answer: 'Absolutely! We welcome suggestions from our community. Use the feedback form in the Student Portal or email resources@eduverse.edu. Our team reviews all suggestions monthly and regularly adds new materials.',
  },
  {
    question: 'Is there a limit on resource downloads?',
    answer: 'There is no download limit for enrolled students. You can access and download as many guides, templates, and tools as you need throughout your enrollment period.',
  },
  {
    question: 'Do you offer support for international students?',
    answer: 'Yes, we provide dedicated support for international students including language assistance, visa guidance, cultural integration programs, and specialized academic advising.',
  },
];

export default function FAQ() {
  // Initialise with null so no item is open by default.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    // Toggle the clicked item; close it if it’s already open.
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Find quick answers to common questions about our resources and
            support services.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleOpen(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-sm font-semibold text-navy pr-4">
                  {faq.question}
                </span>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <i
                    className={`ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  ></i>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-xs text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
