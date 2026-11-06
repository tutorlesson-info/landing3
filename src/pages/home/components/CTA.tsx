import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-0">
      <div className="grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-96 md:h-auto overflow-hidden"
        >
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20happy%20students%20collaborating%20together%20in%20modern%20bright%20university%20space%20smiling%20and%20working%20on%20laptops%20natural%20lighting%20clean%20minimal%20background%20inclusive%20educational%20environment&width=800&height=800&seq=cta-students&orientation=squarish"
            alt="Students collaborating"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-navy/10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-navy text-white p-12 md:p-16 flex flex-col justify-center"
        >
          <div className="w-16 h-1 bg-coral mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready To Start
            <br />
            Your Learning Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Join thousands of students who are transforming their careers with our expert-led programs. Apply today and take the first step toward your future.
          </p>

          <div className="space-y-4 mb-8">
            <button className="w-full md:w-auto px-10 py-4 bg-coral text-white text-base font-semibold rounded-full hover:bg-coral-dark transition-all hover:scale-105 whitespace-nowrap cursor-pointer">
              Apply Now
            </button>
            <button className="w-full md:w-auto px-10 py-4 bg-transparent border-2 border-white text-white text-base font-semibold rounded-full hover:bg-white hover:text-navy transition-all whitespace-nowrap cursor-pointer">
              Schedule a Call
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <i className="ri-check-line text-coral text-xl"></i>
              <span className="text-gray-300">No application fee</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-check-line text-coral text-xl"></i>
              <span className="text-gray-300">Response within 48 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
