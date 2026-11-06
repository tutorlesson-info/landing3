import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';

const categories = ['All', 'Business', 'Technology', 'Design', 'Marketing', 'Healthcare'];

const courses = [
  {
    id: 1,
    title: 'Strategic Leadership',
    category: 'Business',
    level: 'Advanced',
    duration: '8 weeks',
    students: 2847,
    rating: 4.9,
    price: '$599',
    instructor: 'Dr. Sarah Chen',
    image: 'https://readdy.ai/api/search-image?query=business%20leader%20presenting%20strategy%20to%20executive%20team%20in%20modern%20boardroom%20with%20charts%20and%20graphs%20bright%20professional%20setting%20minimal%20background&width=600&height=400&seq=course-leadership&orientation=landscape',
  },
  {
    id: 2,
    title: 'Python for Data Science',
    category: 'Technology',
    level: 'Intermediate',
    duration: '10 weeks',
    students: 4521,
    rating: 4.8,
    price: '$499',
    instructor: 'Prof. Michael Zhang',
    image: 'https://readdy.ai/api/search-image?query=programmer%20coding%20python%20on%20laptop%20with%20data%20visualization%20charts%20on%20screen%20in%20modern%20tech%20workspace%20bright%20clean%20environment%20minimal%20background&width=600&height=400&seq=course-python&orientation=landscape',
  },
  {
    id: 3,
    title: 'UX/UI Design Fundamentals',
    category: 'Design',
    level: 'Beginner',
    duration: '6 weeks',
    students: 3214,
    rating: 4.7,
    price: '$399',
    instructor: 'Emma Rodriguez',
    image: 'https://readdy.ai/api/search-image?query=designer%20working%20on%20user%20interface%20mockups%20with%20stylus%20and%20tablet%20showing%20colorful%20app%20designs%20in%20creative%20studio%20bright%20modern%20setting%20minimal%20background&width=600&height=400&seq=course-ux&orientation=landscape',
  },
  {
    id: 4,
    title: 'Digital Marketing Mastery',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '8 weeks',
    students: 2956,
    rating: 4.8,
    price: '$549',
    instructor: 'James Wilson',
    image: 'https://readdy.ai/api/search-image?query=marketing%20professional%20analyzing%20social%20media%20metrics%20and%20campaign%20performance%20on%20multiple%20screens%20in%20modern%20office%20bright%20collaborative%20space%20minimal%20background&width=600&height=400&seq=course-marketing&orientation=landscape',
  },
  {
    id: 5,
    title: 'Machine Learning Basics',
    category: 'Technology',
    level: 'Intermediate',
    duration: '12 weeks',
    students: 3842,
    rating: 4.9,
    price: '$699',
    instructor: 'Dr. Lisa Park',
    image: 'https://readdy.ai/api/search-image?query=data%20scientist%20working%20with%20machine%20learning%20algorithms%20and%20neural%20network%20visualizations%20on%20computer%20screens%20in%20tech%20lab%20bright%20modern%20environment%20minimal%20background&width=600&height=400&seq=course-ml&orientation=landscape',
  },
  {
    id: 6,
    title: 'Healthcare Administration',
    category: 'Healthcare',
    level: 'Advanced',
    duration: '10 weeks',
    students: 1876,
    rating: 4.7,
    price: '$649',
    instructor: 'Dr. Robert Kim',
    image: 'https://readdy.ai/api/search-image?query=healthcare%20administrator%20reviewing%20patient%20care%20systems%20and%20hospital%20management%20software%20in%20modern%20medical%20office%20bright%20professional%20setting%20minimal%20background&width=600&height=400&seq=course-health&orientation=landscape',
  },
  {
    id: 7,
    title: 'Financial Analysis',
    category: 'Business',
    level: 'Advanced',
    duration: '8 weeks',
    students: 2134,
    rating: 4.8,
    price: '$579',
    instructor: 'Prof. David Lee',
    image: 'https://readdy.ai/api/search-image?query=financial%20analyst%20examining%20stock%20market%20charts%20and%20financial%20reports%20on%20multiple%20monitors%20in%20modern%20office%20bright%20professional%20workspace%20minimal%20background&width=600&height=400&seq=course-finance&orientation=landscape',
  },
  {
    id: 8,
    title: 'Content Marketing Strategy',
    category: 'Marketing',
    level: 'Beginner',
    duration: '6 weeks',
    students: 2687,
    rating: 4.6,
    price: '$449',
    instructor: 'Sophie Anderson',
    image: 'https://readdy.ai/api/search-image?query=content%20creator%20planning%20marketing%20strategy%20with%20mood%20boards%20and%20content%20calendar%20in%20creative%20workspace%20bright%20inspiring%20environment%20minimal%20background&width=600&height=400&seq=course-content&orientation=landscape',
  },
  {
    id: 9,
    title: 'Web Development Bootcamp',
    category: 'Technology',
    level: 'Beginner',
    duration: '14 weeks',
    students: 5234,
    rating: 4.9,
    price: '$799',
    instructor: 'Alex Martinez',
    image: 'https://readdy.ai/api/search-image?query=web%20developer%20coding%20responsive%20website%20on%20laptop%20with%20multiple%20browser%20windows%20showing%20modern%20web%20design%20in%20tech%20workspace%20bright%20clean%20setting%20minimal%20background&width=600&height=400&seq=course-web&orientation=landscape',
  },
];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

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
            COURSE CATALOG
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Learn From Industry
            <br />
            Leading Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our extensive catalog of courses designed to help you master new skills and advance your career
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-coral text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-navy/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {course.level}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-coral/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {course.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{course.category}</span>
                    <span className="flex items-center gap-1">
                      <i className="ri-star-fill text-yellow-500"></i>
                      {course.rating}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Taught by {course.instructor}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-user-line"></i>
                      {course.students.toLocaleString()} students
                    </span>
                  </div>
                  <button className="w-full mt-4 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy/90 transition-colors whitespace-nowrap cursor-pointer">
                    Enroll Now
                  </button>
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
