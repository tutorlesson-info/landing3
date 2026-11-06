import { useState } from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 1,
    title: 'Introduction to Python Programming',
    instructor: 'Dr. Sarah Johnson',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20female%20instructor%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-1&orientation=squarish',
    rating: 4.9,
    reviews: 2847,
    duration: '8 weeks',
    price: 299,
    level: 'Beginner',
    image: 'https://readdy.ai/api/search-image?query=python%20programming%20code%20on%20laptop%20screen%20modern%20workspace%20clean%20minimal%20background%20technology%20education&width=400&height=400&seq=course-python&orientation=squarish',
  },
  {
    id: 2,
    title: 'Advanced Financial Analysis',
    instructor: 'Prof. Michael Chen',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20instructor%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-2&orientation=squarish',
    rating: 4.8,
    reviews: 1923,
    duration: '10 weeks',
    price: 399,
    level: 'Advanced',
    image: 'https://readdy.ai/api/search-image?query=financial%20charts%20and%20graphs%20on%20computer%20screen%20business%20analytics%20workspace%20clean%20minimal%20background%20professional%20setting&width=400&height=400&seq=course-finance&orientation=squarish',
  },
  {
    id: 3,
    title: 'Digital Marketing Fundamentals',
    instructor: 'Emma Rodriguez',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20female%20marketing%20expert%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-3&orientation=squarish',
    rating: 4.9,
    reviews: 3156,
    duration: '6 weeks',
    price: 0,
    level: 'Beginner',
    image: 'https://readdy.ai/api/search-image?query=digital%20marketing%20dashboard%20with%20social%20media%20icons%20and%20analytics%20clean%20modern%20workspace%20minimal%20background&width=400&height=400&seq=course-marketing&orientation=squarish',
  },
  {
    id: 4,
    title: 'Machine Learning Essentials',
    instructor: 'Dr. James Park',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20tech%20instructor%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-4&orientation=squarish',
    rating: 4.7,
    reviews: 1654,
    duration: '12 weeks',
    price: 499,
    level: 'Intermediate',
    image: 'https://readdy.ai/api/search-image?query=artificial%20intelligence%20neural%20network%20visualization%20on%20screen%20modern%20tech%20workspace%20clean%20minimal%20background&width=400&height=400&seq=course-ml&orientation=squarish',
  },
  {
    id: 5,
    title: 'UX/UI Design Masterclass',
    instructor: 'Lisa Anderson',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20female%20designer%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-5&orientation=squarish',
    rating: 4.9,
    reviews: 2431,
    duration: '8 weeks',
    price: 349,
    level: 'Intermediate',
    image: 'https://readdy.ai/api/search-image?query=user%20interface%20design%20mockups%20on%20screen%20colorful%20app%20layouts%20modern%20workspace%20clean%20minimal%20background&width=400&height=400&seq=course-ux&orientation=squarish',
  },
  {
    id: 6,
    title: 'Project Management Professional',
    instructor: 'Robert Williams',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20business%20instructor%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-6&orientation=squarish',
    rating: 4.8,
    reviews: 1876,
    duration: '10 weeks',
    price: 449,
    level: 'Advanced',
    image: 'https://readdy.ai/api/search-image?query=project%20management%20kanban%20board%20with%20tasks%20and%20timeline%20modern%20office%20workspace%20clean%20minimal%20background&width=400&height=400&seq=course-pm&orientation=squarish',
  },
  {
    id: 7,
    title: 'Content Writing & Copywriting',
    instructor: 'Sophie Turner',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20female%20writer%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-7&orientation=squarish',
    rating: 4.9,
    reviews: 2198,
    duration: '6 weeks',
    price: 0,
    level: 'Beginner',
    image: 'https://readdy.ai/api/search-image?query=creative%20writing%20workspace%20with%20laptop%20and%20notebook%20bright%20natural%20light%20clean%20minimal%20background&width=400&height=400&seq=course-writing&orientation=squarish',
  },
  {
    id: 8,
    title: 'Cloud Computing with AWS',
    instructor: 'Dr. David Kumar',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20male%20cloud%20engineer%20headshot%20smiling%20confident%20clean%20white%20background%20portrait&width=100&height=100&seq=inst-8&orientation=squarish',
    rating: 4.8,
    reviews: 1543,
    duration: '12 weeks',
    price: 549,
    level: 'Advanced',
    image: 'https://readdy.ai/api/search-image?query=cloud%20computing%20network%20diagram%20on%20screen%20modern%20tech%20workspace%20clean%20minimal%20background%20professional%20setting&width=400&height=400&seq=course-cloud&orientation=squarish',
  },
];

export default function CourseCatalog() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-orange-500';
      case 'Advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-serif font-bold text-navy mb-4"
          >
            Explore Our Course Catalog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Browse through hundreds of courses across various disciplines
          </motion.p>
        </div>

        <div className="sticky top-20 z-40 bg-gray-50 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <select className="pl-4 pr-10 py-3 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-full text-sm font-semibold text-gray-800 cursor-pointer hover:border-coral hover:shadow-md transition-all min-w-[160px] appearance-none">
                <option>Category</option>
                <option>Business</option>
                <option>Technology</option>
                <option>Design</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"></i>
            </div>
            <div className="relative">
              <select className="pl-4 pr-10 py-3 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-full text-sm font-semibold text-gray-800 cursor-pointer hover:border-coral hover:shadow-md transition-all min-w-[160px] appearance-none">
                <option>Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"></i>
            </div>
            <div className="relative">
              <select className="pl-4 pr-10 py-3 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-full text-sm font-semibold text-gray-800 cursor-pointer hover:border-coral hover:shadow-md transition-all min-w-[160px] appearance-none">
                <option>Duration</option>
                <option>0-6 weeks</option>
                <option>6-12 weeks</option>
                <option>12+ weeks</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"></i>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer transition-colors ${
                  viewMode === 'grid' ? 'bg-coral text-white' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <i className="ri-grid-line"></i>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer transition-colors ${
                  viewMode === 'list' ? 'bg-coral text-white' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <i className="ri-list-check"></i>
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-coral transition-colors"
              />
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8" data-product-shop>
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute bottom-3 right-3 px-2 py-1 ${getLevelColor(
                    course.level
                  )} text-white text-xs font-semibold rounded-full`}
                >
                  {course.level}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-bold text-navy mb-3 line-clamp-2 min-h-[3rem]">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden">
                    <img
                      src={course.avatar}
                      alt={course.instructor}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="text-xs text-gray-600">{course.instructor}</span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < Math.floor(course.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({course.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <i className="ri-time-line"></i>
                    {course.duration}
                  </span>
                  <span
                    className={`text-base font-bold ${
                      course.price === 0 ? 'text-green-600' : 'text-coral'
                    }`}
                  >
                    {course.price === 0 ? 'Free' : `$${course.price}`}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all flex items-center gap-2 mx-auto whitespace-nowrap cursor-pointer">
            Load More Courses
            <i className="ri-arrow-down-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
