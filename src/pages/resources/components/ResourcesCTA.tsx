
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ResourcesCTA() {
  return (
    <section className="py-24 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=abstract%20warm%20gradient%20background%20with%20soft%20terracotta%20and%20peach%20tones%20flowing%20organic%20shapes%20subtle%20texture%20modern%20minimalist%20design%20elegant%20artistic%20composition%20warm%20inviting%20atmosphere&width=1400&height=500&seq=res-cta-bg&orientation=landscape"
              alt="Get Started with EduVerse Resources"
              title="EduVerse Academy - Start Learning Today"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 to-navy/70"></div>
          </div>

          <div className="relative z-10 py-16 px-10 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-3xl font-serif font-bold text-white mb-3">
                Ready to Accelerate Your Learning?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Join thousands of students already using our resources to achieve their academic and career goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-coral text-white text-sm font-semibold rounded-full hover:bg-coral-dark transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                Get Started Free
              </Link>
              <Link
                to="/programs"
                className="px-8 py-3.5 border-2 border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-navy transition-all cursor-pointer whitespace-nowrap"
              >
                View Programs
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
