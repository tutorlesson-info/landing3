import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://readdy.ai/api/search-image?query=modern%20bright%20university%20classroom%20with%20diverse%20students%20collaborating%20around%20tables%20natural%20sunlight%20streaming%20through%20large%20windows%20contemporary%20educational%20environment%20with%20laptops%20and%20books%20clean%20minimalist%20design%20warm%20inviting%20atmosphere&width=1920&height=1080&seq=hero-education-bg&orientation=landscape)',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy/50 to-navy-dark/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-serif font-bold text-white leading-tight mb-6"
          >
            Transform Your
            <br />
            Future Through
            <br />
            Expert Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-200 mb-10 max-w-2xl"
          >
            Access world-class programs designed for modern learners and industry leaders
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-coral text-white text-base font-semibold rounded-full hover:bg-coral-dark transition-all hover:scale-105 whitespace-nowrap cursor-pointer">
              Explore Programs
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white text-base font-semibold rounded-full hover:bg-white hover:text-navy transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer">
              <i className="ri-play-circle-line text-xl"></i>
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-6"
      >
        {/* Statistics card removed */}
      </motion.div>
    </section>
  );
}
