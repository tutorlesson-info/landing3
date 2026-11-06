
import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Guides', 'Videos', 'Templates', 'Tools', 'Research'];

const resources = [
  {
    id: 1,
    title: 'Complete Guide to Academic Writing',
    description:
      'Master essay structure, citations, and research methodology with this comprehensive guide.',
    category: 'Guides',
    type: 'PDF',
    // Tailwind does not allow the “/” character directly inside a string literal that will be parsed as a class name.
    // To avoid the JSX parser error we escape the slash with a back‑slash. Tailwind will still interpret it correctly.
    typeColor: 'bg-emerald-100 text-emerald-700',
    icon: 'ri-file-text-line',
    downloads: 3420,
    image:
      'https://readdy.ai/api/search-image?query=open%20notebook%20with%20elegant%20handwriting%20and%20a%20fountain%20pen%20on%20a%20clean%20white%20desk%20warm%20natural%20lighting%20minimalist%20composition%20soft%20shadows%20academic%20writing%20concept%20cream%20tones&width=600&height=400&seq=res-lib-1&orientation=landscape',
  },
  {
    id: 2,
    title: 'Data Analysis with Python',
    description:
      'Step‑by‑step video series covering pandas, numpy, and data visualization techniques.',
    category: 'Videos',
    type: 'Video',
    // Escape the slash in the Tailwind colour utility.
    typeColor: 'bg-coral\\/10 text-coral',
    icon: 'ri-play-circle-line',
    downloads: 2810,
    image:
      'https://readdy.ai/api/search-image?query=laptop%20screen%20showing%20colorful%20data%20charts%20and%20graphs%20on%20a%20clean%20modern%20desk%20soft%20ambient%20lighting%20minimalist%20workspace%20warm%20neutral%20tones%20technology%20concept&width=600&height=400&seq=res-lib-2&orientation=landscape',
  },
  {
    id: 3,
    title: 'Business Plan Template Pack',
    description:
      'Professional templates for business plans, pitch decks, and financial projections.',
    category: 'Templates',
    type: 'Template',
    typeColor: 'bg-amber-100 text-amber-700',
    icon: 'ri-file-copy-line',
    downloads: 4150,
    image:
      'https://readdy.ai/api/search-image?query=neatly%20organized%20business%20documents%20and%20charts%20on%20a%20wooden%20desk%20with%20a%20coffee%20cup%20warm%20morning%20light%20professional%20workspace%20clean%20minimal%20composition%20cream%20background&width=600&height=400&seq=res-lib-3&orientation=landscape',
  },
  {
    id: 4,
    title: 'Research Database Access',
    description:
      'Search millions of peer‑reviewed journals, articles, and academic publications.',
    category: 'Research',
    type: 'Interactive',
    typeColor: 'bg-sky-100 text-sky-700',
    icon: 'ri-search-eye-line',
    downloads: 5600,
    image:
      'https://readdy.ai/api/search-image?query=abstract%20digital%20network%20visualization%20with%20interconnected%20nodes%20and%20lines%20warm%20terracotta%20and%20cream%20color%20palette%20soft%20glow%20modern%20minimalist%20design%20research%20concept&width=600&height=400&seq=res-lib-4&orientation=landscape',
  },
  {
    id: 5,
    title: 'Citation Generator Tool',
    description:
      'Automatically format citations in APA, MLA, Chicago, and Harvard styles.',
    category: 'Tools',
    type: 'Interactive',
    // Escape the slash again.
    typeColor: 'bg-sky-100 text-sky-700',
    icon: 'ri-double-quotes-l',
    downloads: 7230,
    image:
      'https://readdy.ai/api/search-image?query=close%20up%20of%20a%20beautifully%20typeset%20book%20page%20with%20footnotes%20and%20references%20soft%20warm%20lighting%20elegant%20serif%20typography%20cream%20paper%20texture%20academic%20publishing%20concept&width=600&height=400&seq=res-lib-5&orientation=landscape',
  },
  {
    id: 6,
    title: 'Leadership & Management Series',
    description:
      'A 12‑part video course on modern leadership principles and team management.',
    category: 'Videos',
    type: 'Video',
    typeColor: 'bg-coral\\/10 text-coral',
    icon: 'ri-play-circle-line',
    downloads: 1980,
    image:
      'https://readdy.ai/api/search-image?query=diverse%20team%20of%20professionals%20collaborating%20around%20a%20conference%20table%20bright%20modern%20office%20warm%20natural%20light%20clean%20minimal%20interior%20leadership%20concept%20neutral%20tones&width=600&height=400&seq=res-lib-6&orientation=landscape',
  },
];

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <section id="resource-library" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
            Browse &amp; Download
          </div>
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Resource Library
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Explore our curated collection of guides, videos, templates, and
            tools to support every aspect of your studies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-navy text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource, i) => (
            <motion.article
              key={resource.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-[#FAFAF8] rounded-2xl overflow-hidden border border-gray-100 hover:border-coral/30 transition-all cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  title={`${resource.title} - EduVerse Academy`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-bold rounded-full ${resource.typeColor}`}
                >
                  {resource.type}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-navy text-sm mb-2 group-hover:text-coral transition-colors">
                  <a href="#">{resource.title}</a>
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <i className="ri-download-line"></i>
                    {resource.downloads.toLocaleString()} downloads
                  </span>
                  <a
                    href="#"
                    className="text-coral text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Access <i className="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-navy text-navy text-sm font-semibold rounded-full hover:bg-navy hover:text-white transition-all cursor-pointer whitespace-nowrap"
          >
            View All Resources <i className="ri-arrow-right-line"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
