import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Data Analyst',
    company: 'TechCorp',
    photo: 'https://readdy.ai/api/search-image?query=professional%20young%20woman%20with%20confident%20smile%20wearing%20business%20casual%20attire%20in%20modern%20office%20setting%20natural%20lighting%20clean%20simple%20background%20headshot%20portrait&width=200&height=200&seq=testimonial-sarah-mitchell&orientation=squarish',
    quote: 'This program transformed my career completely. The practical approach and expert mentorship gave me the skills and confidence I needed to land my dream job in data science.',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    company: 'InnovateLabs',
    photo: 'https://readdy.ai/api/search-image?query=professional%20asian%20man%20with%20friendly%20smile%20wearing%20casual%20business%20shirt%20in%20bright%20office%20environment%20clean%20simple%20background%20headshot%20portrait&width=200&height=200&seq=testimonial-michael-chen&orientation=squarish',
    quote: 'The curriculum is incredibly well-structured and up-to-date with industry standards. I appreciated the balance between theory and hands-on projects that prepared me for real-world challenges.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'DesignHub',
    photo: 'https://readdy.ai/api/search-image?query=professional%20hispanic%20woman%20with%20warm%20smile%20wearing%20modern%20casual%20outfit%20in%20creative%20workspace%20clean%20simple%20background%20headshot%20portrait&width=200&height=200&seq=testimonial-emily-rodriguez&orientation=squarish',
    quote: 'What sets this academy apart is the personalized attention and career support. The instructors genuinely care about your success and go above and beyond to help you achieve your goals.',
  },
  {
    name: 'David Thompson',
    role: 'Product Manager',
    company: 'StartupVentures',
    photo: 'https://readdy.ai/api/search-image?query=professional%20man%20with%20confident%20expression%20wearing%20smart%20casual%20attire%20in%20contemporary%20office%20space%20clean%20simple%20background%20headshot%20portrait&width=200&height=200&seq=testimonial-david-thompson&orientation=squarish',
    quote: 'The networking opportunities and industry connections I gained here were invaluable. The program opened doors I never thought possible and accelerated my career trajectory significantly.',
  },
  {
    name: 'Jessica Park',
    role: 'Marketing Strategist',
    company: 'BrandWorks',
    photo: 'https://readdy.ai/api/search-image?query=professional%20young%20woman%20with%20bright%20smile%20wearing%20stylish%20business%20attire%20in%20modern%20workspace%20clean%20simple%20background%20headshot%20portrait&width=200&height=200&seq=testimonial-jessica-park&orientation=squarish',
    quote: 'I was amazed by how quickly I could apply what I learned to real projects. The practical skills and strategic thinking I developed here have been game-changers in my professional journey.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif font-bold text-navy mb-4"
          >
            What Our Students Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Real stories from students who transformed their careers
          </motion.p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            el: '.testimonials-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-yellow-400 text-xl"
                    ></i>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-navy">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.program}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="testimonials-pagination mt-8 flex justify-center"></div>
      </div>
    </section>
  );
}
